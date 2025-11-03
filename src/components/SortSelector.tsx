import type { SortKey } from "../types/sortKey";

type SortSelectorProps = {
  sortBy: SortKey;
  onSortChange: (value: SortKey) => void;
};

export default function SortSelector({
  sortBy,
  onSortChange,
}: SortSelectorProps) {
  return (
    <div className="mb-8 flex items-center justify-end gap-3">
      <label htmlFor="sort" className="font-bold">
        Sort By:
      </label>
      <select
        id="sort"
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value as SortKey)}
        className="rounded-lg border-none bg-[#1c1f26] px-4 py-2 text-white outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="market_cap_desc">Market Cap (High To Low)</option>
        <option value="market_cap_asc">Market Cap (Low To High)</option>
        <option value="price_desc">Price (High To Low)</option>
        <option value="price_asc">Price (Low To High)</option>
        <option value="change_desc">24h Change (High To Low)</option>
        <option value="change_asc">24h Change (Low To High)</option>
      </select>
    </div>
  );
}
