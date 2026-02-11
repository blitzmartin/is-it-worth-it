type Props = {
  total: number;
  currencySymbol: string;
};

export const TotalSummary = ({ total, currencySymbol }: Props) => {
  return (
    <div className="mt-2">
      <p className="text-4xl font-bold text-accent">
        {currencySymbol}
        {total.toFixed(2)}
      </p>
      <p className="text-sm text-muted mt-3">
        (price of access, not ownership)
      </p>
    </div>
  );
};
