import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import type { BillingFrequency, Subscription } from "../types/subscription";

type Props = {
  addSubscription: (sub: Subscription) => void;
};

export const AddSubscriptionForm = ({ addSubscription }: Props) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [frequency, setFrequency] = useState<BillingFrequency>("monthly");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !amount) return;

    addSubscription({
      id: uuidv4(),
      name,
      amount: parseFloat(amount),
      frequency,
    });

    setName("");
    setAmount("");
    setFrequency("monthly");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-surface border border-base rounded-lg p-5 space-y-4"
    >
      <input
        placeholder="Service name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full bg-base border border-base rounded px-3 py-2 text-base outline-none focus:ring-2 focus:ring-[rgb(var(--color-accent))]"
      />

      <input
        type="number"
        step="0.01"
        placeholder="Cost"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full bg-base border border-base rounded px-3 py-2 text-base outline-none focus:ring-2 focus:ring-[rgb(var(--color-accent))]"
      />

      <select
        value={frequency}
        onChange={(e) => setFrequency(e.target.value as BillingFrequency)}
        className="w-full bg-base border border-base rounded px-3 py-2 text-base outline-none"
      >
        <option value="monthly">Monthly</option>
        <option value="weekly">Weekly</option>
        <option value="yearly">Yearly</option>
      </select>

      <button
        type="submit"
        className="w-full bg-accent text-white rounded py-2 font-medium transition-opacity hover:opacity-90"
      >
        + Add subscription
      </button>
    </form>
  );
};
