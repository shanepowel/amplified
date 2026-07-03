import { NextRequest, NextResponse } from 'next/server';
import { storage } from '../../../lib/storage';
import { insertAiWasteCalculationSchema } from '@shared/schema';
import { crmService } from '../../../lib/services/crm';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { employees, shadowAI, avgCost, duplicates, email } = body;

    if (
      isNaN(employees) || isNaN(shadowAI) || isNaN(avgCost) || isNaN(duplicates) ||
      employees < 1 || employees > 100000 ||
      shadowAI < 0 || shadowAI > 1000 ||
      avgCost < 0 || avgCost > 10000 ||
      duplicates < 0 || duplicates > 500
    ) {
      return NextResponse.json({ success: false, error: 'Invalid calculation data' }, { status: 400 });
    }

    const shadowAICost = shadowAI * avgCost;
    const duplicationCost = duplicates * avgCost * 0.7;
    const inefficiencyCost = employees * 25;
    const governanceRisk = employees * 15;

    const monthlyWaste = shadowAICost + duplicationCost + inefficiencyCost + governanceRisk;
    const annualWaste = monthlyWaste * 12;

    const calculationData = {
      employees,
      shadowAI,
      avgCost: avgCost.toString(),
      duplicates,
      monthlyWaste: monthlyWaste.toString(),
      annualWaste: annualWaste.toString(),
      email: email || null,
    };

    const validatedData = insertAiWasteCalculationSchema.parse(calculationData);
    const calculation = await storage.createAiWasteCalculation(validatedData);

    if (email) {
      await crmService.createLeadFromCalculation(calculation);
    }

    return NextResponse.json({
      success: true,
      monthly: Math.round(monthlyWaste),
      annual: Math.round(annualWaste),
      breakdown: {
        shadowAI: Math.round(shadowAICost),
        duplication: Math.round(duplicationCost),
        inefficiency: Math.round(inefficiencyCost),
        risk: Math.round(governanceRisk),
      },
      data: calculation,
    });
  } catch (error) {
    console.error('Error calculating AI waste:', error);
    return NextResponse.json({ success: false, error: 'Invalid calculation data' }, { status: 400 });
  }
}
