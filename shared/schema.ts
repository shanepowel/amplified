import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, decimal, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Service Interest Enum
export const serviceInterestEnum = ["amplified-learn", "amplified-coach", "amplified-teams", "amplified-transformation", "full-suite", "discovery"] as const;
export type ServiceInterest = typeof serviceInterestEnum[number];

// Customer Persona Enum  
export const customerPersonaEnum = ["contractor-pete", "sme-jill", "enterprise-sally", "other"] as const;
export type CustomerPersona = typeof customerPersonaEnum[number];

// Urgency Level Enum (keeping original for backwards compatibility)
export const urgencyLevelEnum = ["compliance", "urgent", "planning", "exploring"] as const;
export type UrgencyLevel = typeof urgencyLevelEnum[number];

export const consultationRequests = pgTable("consultation_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company"),
  serviceInterest: text("service_interest").notNull(),
  persona: text("persona"),
  urgencyLevel: text("urgency_level"),
  description: text("description"),
  serviceType: text("service_type"), // Keep for backwards compatibility
  createdAt: timestamp("created_at").defaultNow(),
});

export const aiWasteCalculations = pgTable("ai_waste_calculations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  employees: integer("employees").notNull(),
  shadowAI: integer("shadow_ai").notNull(),
  avgCost: decimal("avg_cost").notNull(),
  duplicates: integer("duplicates").notNull(),
  monthlyWaste: decimal("monthly_waste").notNull(),
  annualWaste: decimal("annual_waste").notNull(),
  email: text("email"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Content Type Enum
export const contentTypeEnum = ["page", "service", "case_study", "insight", "hero", "feature"] as const;
export type ContentType = typeof contentTypeEnum[number];

// Content Status Enum
export const contentStatusEnum = ["draft", "published", "archived"] as const;
export type ContentStatus = typeof contentStatusEnum[number];

// CMS Content Items
export const contentItems = pgTable("content_items", {
  id: varchar("id").primaryKey(),
  type: text("type").notNull(),
  title: text("title").notNull(),
  slug: text("slug").notNull(),
  content: jsonb("content").notNull(),
  status: text("status").notNull().default("published"),
  lastModified: timestamp("last_modified").defaultNow().notNull(),
  modifiedBy: text("modified_by").notNull().default("system"),
  version: integer("version").notNull().default(1),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertConsultationRequestSchema = createInsertSchema(consultationRequests)
  .omit({
    id: true,
    createdAt: true,
  })
  .extend({
    serviceInterest: z.enum(serviceInterestEnum),
    persona: z.enum(customerPersonaEnum).optional(),
    urgencyLevel: z.enum(urgencyLevelEnum).optional(),
  });

export const insertAiWasteCalculationSchema = createInsertSchema(aiWasteCalculations).omit({
  id: true,
  createdAt: true,
});

export const insertContentItemSchema = createInsertSchema(contentItems)
  .omit({
    createdAt: true,
    lastModified: true,
  })
  .extend({
    type: z.enum(contentTypeEnum),
    status: z.enum(contentStatusEnum).optional(),
  });

export type InsertConsultationRequest = z.infer<typeof insertConsultationRequestSchema>;
export type ConsultationRequest = typeof consultationRequests.$inferSelect;

export type InsertAiWasteCalculation = z.infer<typeof insertAiWasteCalculationSchema>;
export type AiWasteCalculation = typeof aiWasteCalculations.$inferSelect;

export type InsertContentItem = z.infer<typeof insertContentItemSchema>;
export type ContentItem = typeof contentItems.$inferSelect;
