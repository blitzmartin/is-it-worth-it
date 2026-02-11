type Props = {
  total: number;
  currencySymbol: string;
};

export const TotalSummary = ({ total, currencySymbol }: Props) => {
  return (
    <div className="mt-10 border-t border-base pt-6">
      <h2 className="text-lg font-medium text-muted">Total yearly cost</h2>

      <p className="text-4xl font-bold mt-2 text-accent">
        {currencySymbol}
        {total.toFixed(2)}
      </p>

      <p className="text-sm text-muted mt-3">
        That’s the price of access, not ownership :')
      </p>
    </div>
  );
};
