type FilterInputProps = {
  filter: string;
  onFilterChange: (value: string) => void;
};

export default function FilterInput({
  filter,
  onFilterChange,
}: FilterInputProps) {
  return (
    <div className="mb-8 flex-1">
      <input
        className="w-full rounded-lg border-none bg-[#1c1f26] p-3 text-base text-white outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        value={filter}
        placeholder="Filter coins by name or symbol"
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </div>
  );
}
