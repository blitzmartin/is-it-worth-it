import type { Subscription } from '../types/subscription';

export const  calculateYearlyCost = (sub: Subscription): number => {
  switch (sub.frequency) {
    case "monthly":
      return sub.amount * 12;
    case "weekly":
      return sub.amount * 52;
    case "yearly":
      return sub.amount;
  }
}
