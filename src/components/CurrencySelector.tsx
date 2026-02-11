import type { Currency } from "../types/subscription";

type Props = {
  currency: Currency;
  setCurrency: (c: Currency) => void;
};

export const CurrencySelector = ({ currency, setCurrency }: Props) => {
  return (
    <select
      value={currency}
      onChange={(e) => setCurrency(e.target.value as Currency)}
      className="bg-surface border border-base rounded px-3 py-1  text-base outline-none"
    >
      <option value="EUR">EUR €</option>
      <option value="USD">USD $</option>
      <option value="GBP">GBP £</option>
    </select>
  );
};
