import { calculateYearlyCost } from "../lib/utils";
import type { Subscription } from "../types/subscription";

type Props = {
  sub: Subscription;
  currencySymbol: string;
  remove: (id: string) => void;
};

export const SubscriptionCard = ({ sub, currencySymbol, remove }: Props) => {
  const yearly = calculateYearlyCost(sub);

  return (
    <div className="bg-surface border border-base rounded-lg p-4 flex justify-between items-center">
      <div>
        <h3 className="font-medium text-base">{sub.name}</h3>

        <p className="text-sm text-muted">
          {currencySymbol}
          {sub.amount} / {sub.frequency}
        </p>

        <p className="text-sm mt-1 text-accent font-medium">
          → {currencySymbol}
          {yearly.toFixed(2)} / year
        </p>
      </div>

      <button
        onClick={() => remove(sub.id)}
        className="text-sm text-muted hover:text-accent transition-colors"
      >
        Remove
      </button>
    </div>
  );
};
