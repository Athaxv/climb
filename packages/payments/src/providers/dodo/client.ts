import DodoPayments from "dodopayments";
import { PaymentProviderError } from "../../types";
import type { DodoEnvironment, DodoSdkLike } from "./types";

export function resolveDodoEnvironment(
  value = process.env.DODO_PAYMENTS_ENVIRONMENT,
): DodoEnvironment {
  return value === "live_mode" ? "live_mode" : "test_mode";
}

export function isUsableDodoApiKey(value: string | undefined): boolean {
  const key = value?.trim() ?? "";
  if (key.length < 20 || key.includes("...")) return false;
  return true;
}

export function isUsableDodoProductId(value: string | undefined): boolean {
  return Boolean(value && /^pdt_[A-Za-z0-9]+$/.test(value.trim()) && !value.includes("..."));
}

export function createDodoClient(opts?: {
  bearerToken?: string;
  webhookKey?: string;
  environment?: DodoEnvironment;
}): DodoSdkLike {
  const bearerToken = opts?.bearerToken ?? process.env.DODO_PAYMENTS_API_KEY;
  if (!isUsableDodoApiKey(bearerToken)) {
    throw new PaymentProviderError("DODO_PAYMENTS_API_KEY is not configured", "not_configured");
  }

  return new DodoPayments({
    bearerToken,
    environment: opts?.environment ?? resolveDodoEnvironment(),
    webhookKey: opts?.webhookKey ?? process.env.DODO_PAYMENTS_WEBHOOK_KEY,
  }) as unknown as DodoSdkLike;
}
