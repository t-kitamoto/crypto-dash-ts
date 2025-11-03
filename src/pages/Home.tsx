import type { Coin } from "../models/coin";
import type { SortKey } from "../types/sortKey";

import LimitSelector from "../components/LimitSelector";
import FilterInput from "../components/FilterInput";
import SortSelector from "../components/SortSelector";
import CoinCard from "../components/CoinCard";
import { Spinner } from "../components/Spinner";
import { ErrorMessage } from "../components/ErrorMessage";

type HomeProps = {
  coins: Coin[];
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  sortBy: SortKey;
  setSortBy: React.Dispatch<React.SetStateAction<SortKey>>;
  isLoading: boolean;
  error: string | null;
};

export default function Home({
  coins,
  filter,
  setFilter,
  limit,
  setLimit,
  sortBy,
  setSortBy,
  isLoading,
  error,
}: HomeProps) {
  const filteredCoins = coins
    .filter((coin) => {
      return (
        coin.name.toLowerCase().includes(filter.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(filter.toLowerCase())
      );
    })
    .slice()
    .sort((a, b) => {
      switch (sortBy) {
        case "market_cap_desc":
          return b.market_cap - a.market_cap;
        case "market_cap_asc":
          return a.market_cap - b.market_cap;
        case "price_desc":
          return b.current_price - a.current_price;
        case "price_asc":
          return a.current_price - b.current_price;
        case "change_desc":
          return b.price_change_percentage_24h - a.price_change_percentage_24h;
        case "change_asc":
          return a.price_change_percentage_24h - b.price_change_percentage_24h;
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-[#0e1117] px-8 pb-8 font-sans leading-relaxed text-[#f0f0f0]">
      <h1 className="mb-8 text-3xl">🚀 Crypto Dash TS</h1>
      {isLoading && <Spinner />}
      {error && <ErrorMessage message={error} />}

      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <FilterInput filter={filter} onFilterChange={setFilter} />
        <LimitSelector limit={limit} onLimitChange={setLimit} />
        <SortSelector sortBy={sortBy} onSortChange={setSortBy} />
      </div>

      {!isLoading && !error && (
        <main className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {filteredCoins.length > 0 ? (
            filteredCoins.map((coin) => <CoinCard key={coin.id} coin={coin} />)
          ) : (
            <p>No matching coins</p>
          )}
        </main>
      )}
    </div>
  );
}
