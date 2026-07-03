import { type ConsultationRequest, type InsertConsultationRequest, type AiWasteCalculation, type InsertAiWasteCalculation, type ContentItem, type InsertContentItem, consultationRequests, aiWasteCalculations, contentItems } from "@shared/schema";
import { randomUUID } from "crypto";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // Consultation requests
  createConsultationRequest(request: InsertConsultationRequest): Promise<ConsultationRequest>;
  getConsultationRequests(): Promise<ConsultationRequest[]>;
  
  // AI waste calculations
  createAiWasteCalculation(calculation: InsertAiWasteCalculation): Promise<AiWasteCalculation>;
  getAiWasteCalculations(): Promise<AiWasteCalculation[]>;
  
  // CMS Content
  createContentItem(item: InsertContentItem): Promise<ContentItem>;
  getContentItems(): Promise<ContentItem[]>;
  getContentItemBySlug(slug: string): Promise<ContentItem | undefined>;
  getContentItemsByType(type: string): Promise<ContentItem[]>;
  updateContentItem(id: string, item: Partial<InsertContentItem>): Promise<ContentItem | undefined>;
  deleteContentItem(id: string): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private consultationRequests: Map<string, ConsultationRequest>;
  private aiWasteCalculations: Map<string, AiWasteCalculation>;
  private contentItems: Map<string, ContentItem>;

  constructor() {
    this.consultationRequests = new Map();
    this.aiWasteCalculations = new Map();
    this.contentItems = new Map();
  }

  async createConsultationRequest(insertRequest: InsertConsultationRequest): Promise<ConsultationRequest> {
    const id = randomUUID();
    const request: ConsultationRequest = { 
      ...insertRequest,
      description: insertRequest.description || null,
      phone: insertRequest.phone || null,
      company: insertRequest.company || null,
      persona: insertRequest.persona || null,
      urgencyLevel: insertRequest.urgencyLevel || null,
      serviceType: insertRequest.serviceType || null,
      id,
      createdAt: new Date()
    };
    this.consultationRequests.set(id, request);
    return request;
  }

  async getConsultationRequests(): Promise<ConsultationRequest[]> {
    return Array.from(this.consultationRequests.values());
  }

  async createAiWasteCalculation(insertCalculation: InsertAiWasteCalculation): Promise<AiWasteCalculation> {
    const id = randomUUID();
    const calculation: AiWasteCalculation = { 
      ...insertCalculation,
      email: insertCalculation.email || null,
      id,
      createdAt: new Date()
    };
    this.aiWasteCalculations.set(id, calculation);
    return calculation;
  }

  async getAiWasteCalculations(): Promise<AiWasteCalculation[]> {
    return Array.from(this.aiWasteCalculations.values());
  }

  async createContentItem(insertItem: InsertContentItem): Promise<ContentItem> {
    const item: ContentItem = {
      ...insertItem,
      status: insertItem.status || "published",
      modifiedBy: insertItem.modifiedBy || "system",
      version: insertItem.version || 1,
      lastModified: new Date(),
      createdAt: new Date(),
    };
    this.contentItems.set(item.id, item);
    return item;
  }

  async getContentItems(): Promise<ContentItem[]> {
    return Array.from(this.contentItems.values());
  }

  async getContentItemBySlug(slug: string): Promise<ContentItem | undefined> {
    return Array.from(this.contentItems.values()).find(item => item.slug === slug);
  }

  async getContentItemsByType(type: string): Promise<ContentItem[]> {
    return Array.from(this.contentItems.values()).filter(item => item.type === type);
  }

  async updateContentItem(id: string, updateData: Partial<InsertContentItem>): Promise<ContentItem | undefined> {
    const existing = this.contentItems.get(id);
    if (!existing) return undefined;
    
    const updated: ContentItem = {
      ...existing,
      ...updateData,
      lastModified: new Date(),
      version: existing.version + 1,
    };
    this.contentItems.set(id, updated);
    return updated;
  }

  async deleteContentItem(id: string): Promise<boolean> {
    return this.contentItems.delete(id);
  }
}

export class DbStorage implements IStorage {
  async createConsultationRequest(insertRequest: InsertConsultationRequest): Promise<ConsultationRequest> {
    const [request] = await db.insert(consultationRequests).values(insertRequest).returning();
    return request;
  }

  async getConsultationRequests(): Promise<ConsultationRequest[]> {
    return await db.select().from(consultationRequests);
  }

  async createAiWasteCalculation(insertCalculation: InsertAiWasteCalculation): Promise<AiWasteCalculation> {
    const [calculation] = await db.insert(aiWasteCalculations).values(insertCalculation).returning();
    return calculation;
  }

  async getAiWasteCalculations(): Promise<AiWasteCalculation[]> {
    return await db.select().from(aiWasteCalculations);
  }

  async createContentItem(insertItem: InsertContentItem): Promise<ContentItem> {
    const [item] = await db.insert(contentItems).values(insertItem).returning();
    return item;
  }

  async getContentItems(): Promise<ContentItem[]> {
    return await db.select().from(contentItems);
  }

  async getContentItemBySlug(slug: string): Promise<ContentItem | undefined> {
    const items = await db.select().from(contentItems).where(eq(contentItems.slug, slug));
    return items[0];
  }

  async getContentItemsByType(type: string): Promise<ContentItem[]> {
    return await db.select().from(contentItems).where(eq(contentItems.type, type));
  }

  async updateContentItem(id: string, updateData: Partial<InsertContentItem>): Promise<ContentItem | undefined> {
    const [updated] = await db.update(contentItems)
      .set({
        ...updateData,
        lastModified: new Date(),
      })
      .where(eq(contentItems.id, id))
      .returning();
    return updated;
  }

  async deleteContentItem(id: string): Promise<boolean> {
    const result = await db.delete(contentItems).where(eq(contentItems.id, id)).returning();
    return result.length > 0;
  }
}

export const storage = new DbStorage();
