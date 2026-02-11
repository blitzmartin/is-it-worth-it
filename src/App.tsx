import { useMemo } from "react";

import {
  AddSubscriptionForm,
  CurrencySelector,
  SubscriptionCard,
  TotalSummary,
} from "./components";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { calculateYearlyCost } from "./lib/utils";
import type { Currency, Subscription } from "./types/subscription";

const currencySymbols = {
  EUR: "€",
  USD: "$",
  GBP: "£",
};

export const App = () => {
  const [subscriptions, setSubscriptions] = useLocalStorage<Subscription[]>(
    "subscriptions",
    [],
  );

  const [currency, setCurrency] = useLocalStorage<Currency>("currency", "EUR");

  const total = useMemo(() => {
    return subscriptions.reduce(
      (acc, sub) => acc + calculateYearlyCost(sub),
      0,
    );
  }, [subscriptions]);

  const addSubscription = (sub: Subscription) => {
    setSubscriptions([...subscriptions, sub]);
  };

  const removeSubscription = (id: string) => {
    setSubscriptions(subscriptions.filter((s) => s.id !== id));
  };

  const resetSubscriptions = () => {
    if (confirm("Are you sure you want to clear all subscriptions?")) {
      setSubscriptions([]);
      localStorage.removeItem("subscriptions");
    }
  };

  return (
    <div className="min-h-screen bg-base text-base p-6">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Is it worth it?</h1>
          <CurrencySelector currency={currency} setCurrency={setCurrency} />
        </div>

        <p className="text-muted text-sm">
          Add your subscriptions. See what you really spend. No accounts. No
          tracking. Everything stays in your browser.
        </p>

        <AddSubscriptionForm addSubscription={addSubscription} />

        <div className="space-y-4">
          {subscriptions.map((sub) => (
            <SubscriptionCard
              key={sub.id}
              sub={sub}
              currencySymbol={currencySymbols[currency]}
              remove={removeSubscription}
            />
          ))}
        </div>

        <div className="mt-10 border-t border-base pt-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium text-muted">
              Total yearly cost
            </h2>

            <button
              onClick={resetSubscriptions}
              className="bg-accent text-white px-4 py-2 rounded text-sm hover:opacity-90 transition-opacity"
            >
              Reset All
            </button>
          </div>

          {/* Componente TotalSummary rimane solo per mostrare il totale */}
          <TotalSummary
            total={total}
            currencySymbol={currencySymbols[currency]}
          />
        </div>

        <div className="pt-10 text-sm text-muted border-t border-base gap-3 flex flex-col">
          <h3 className="text-lg text-slate-700 font-bold">
            About this project
          </h3>
          <p>
            We are slowly moving into an “own nothing” economy. Software, music,
            films, tools, everything is rented.
          </p>
          <p>
            Subscriptions feel small but together they shape how much freedom we
            actually have.
          </p>
          <p>
            This project was created to raise awareness and to make the
            invisible visible.
          </p>
          <p>
            This tool does not require an account. There is no AI. There is no
            tracking and no data collection. Everything stays in your browser.
          </p>
          <p className="mt-2">Paper Board Labs</p>
        </div>
      </div>
    </div>
  );
};
