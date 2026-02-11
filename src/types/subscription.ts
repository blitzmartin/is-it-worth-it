export type BillingFrequency = "monthly" | "yearly" | "weekly";

export type Subscription = {
  id: string;
  name: string;
  amount: number;
  frequency: BillingFrequency;
};

export type Currency = "EUR" | "USD" | "GBP";
