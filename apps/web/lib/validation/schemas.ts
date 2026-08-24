import { z } from "zod";

export const inferProfileSchema = z.object({
  identity: z.string().min(8).max(500),
});

const listingFields = {
  category: z.string().min(1).max(80).optional(),
  name: z.string().min(1).max(80).optional(),
  headline: z.string().max(160).optional(),
  skills: z.string().max(240).optional(),
  imageUrl: z.string().max(500).optional(),
  bio: z.string().max(500).optional(),
  location: z.string().max(80).optional(),
};

export const createProfileSchema = z.object({
  identity: z.string().min(8).max(500),
  ...listingFields,
});

export const checkoutSchema = z.object({
  identity: z.string().min(8).max(500),
  ...listingFields,
  /** Requested listing amount in whole dollars. Server recomputes the charge. */
  targetBid: z.number().int().positive().max(999_999).optional(),
});
