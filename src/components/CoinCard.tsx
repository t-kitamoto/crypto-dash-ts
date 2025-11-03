import { Link } from "react-router";
import type { Coin } from "../models/coin";

type CoinCardProps = { coin: Coin };

export default function CoinCard({ coin }: CoinCardProps) {
  return (
    <Link to={`/coin/${coin.id}`}>
      <div className="rounded-xl bg-[#161b22] p-6 shadow-[0_0_10px_rgba(0,0,0,0.3)] transition-transform duration-200 ease-linear hover:-translate-y-[5px]">
        <div className="mb-4 flex items-center gap-4">
          <img src={coin.image} alt={coin.name} className="h-10 w-10" />
          <div>{coin.name}</div>
          <p className="text-[0.9rem] text-[#aaa]">
            {coin.symbol.toUpperCase()}
          </p>
        </div>
        <p>Price: ${coin.current_price.toLocaleString()}</p>
        <p
          className={
            coin.price_change_percentage_24h >= 0
              ? "text-[#4caf50]"
              : "text-[#f44336]"
          }
        >
          {coin.price_change_percentage_24h.toFixed(2)}
        </p>
        <p>Market Cap: {coin.market_cap.toLocaleString()}</p>
      </div>
    </Link>
  );
}
