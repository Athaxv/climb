import { z } from "zod";

export const inferProfileSchema = z.object({
  identity: z.string().min(8).max(500),
});

export const createProfileSchema = z.object({
  identity: z.string().min(8).max(500),
  category: z.string().min(1).max(80).optional(),
  name: z.string().min(1).max(80).optional(),
  headline: z.string().max(160).optional(),
  skills: z.string().max(240).optional(),
});

export const checkoutSchema = z.object({
  identity: z.string().min(8).max(500),
  category: z.string().min(1).max(80).optional(),
  name: z.string().min(1).max(80).optional(),
  headline: z.string().max(160).optional(),
  skills: z.string().max(240).optional(),
  /** Requested listing amount in whole dollars. Server recomputes the charge. */
  targetBid: z.number().int().positive().max(999_999).optional(),
});
