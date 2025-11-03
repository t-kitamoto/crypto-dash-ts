type LimitSelectorProps = {
  limit: number;
  onLimitChange: (value: number) => void;
};

export default function LimitSelector({
  limit,
  onLimitChange,
}: LimitSelectorProps) {
  return (
    <div className="mb-8 flex items-center justify-end gap-3">
      <label htmlFor="limit" className="font-bold">
        Show:{" "}
      </label>
      <select
        value={limit}
        id="limit"
        onChange={(e) => onLimitChange(Number(e.target.value))}
        className="rounded-lg border-none bg-[#1c1f26] px-4 py-2 text-white outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  );
}
