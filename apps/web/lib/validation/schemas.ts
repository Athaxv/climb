import { z } from "zod";

export const createProfileSchema = z.object({
  identity: z.string().min(3).max(200),
  category: z.string().min(1).max(80),
  name: z.string().min(1).max(80).optional(),
  headline: z.string().max(160).optional(),
});

export const checkoutSchema = z.object({
  identity: z.string().min(3).max(200),
  category: z.string().min(1).max(80),
  name: z.string().min(1).max(80).optional(),
  headline: z.string().max(160).optional(),
  /** Requested listing amount in whole dollars. Server recomputes the charge. */
  targetBid: z.number().int().positive().max(999_999).optional(),
  email: z.string().email().optional(),
});
