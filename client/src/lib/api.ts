import { apiRequest } from "./queryClient";
import type { InsertConsultationRequest, ConsultationRequest } from "@shared/schema";

export interface WasteCalculationRequest {
  employees: number;
  shadowAI: number;
  avgCost: number;
  duplicates: number;
  email?: string;
}

export interface WasteCalculationResponse {
  success: boolean;
  monthly: number;
  annual: number;
  breakdown: {
    shadowAI: number;
    duplication: number;
    inefficiency: number;
    risk: number;
  };
}

export interface ConsultationResponse {
  success: boolean;
  data: ConsultationRequest;
  emailSent?: boolean;
  warnings?: string[];
}

export const submitConsultationRequest = async (data: InsertConsultationRequest): Promise<ConsultationResponse> => {
  const response = await apiRequest("POST", "/api/consultation", data);
  return response.json();
};

export const calculateAiWaste = async (data: WasteCalculationRequest): Promise<WasteCalculationResponse> => {
  const response = await apiRequest("POST", "/api/calculate-waste", data);
  return response.json();
};
