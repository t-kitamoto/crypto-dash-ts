import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

import { Spinner } from "../components/Spinner";
import { ErrorMessage } from "../components/ErrorMessage";
import type { CoinDetail } from "../models/coinDetail";
import CoinChart from "../components/CoinChart";

const API_URL = import.meta.env.VITE_COIN_API_URL;

export default function CoinDetails() {
  const { id } = useParams<{ id: string }>();
  const [coin, setCoin] = useState<CoinDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    const fetchCoin = async () => {
      try {
        const res = await fetch(`${API_URL}/${id}`);
        if (!res.ok) throw new Error("Failed to fetch chart data");
        const data = (await res.json()) as CoinDetail;
        setCoin(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(String(err));
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchCoin();
  }, [id]);

  return (
    <div className="min-h-screen bg-[#0e1117] p-8 font-sans leading-relaxed text-[#f0f0f0]">
      <div className="mx-auto mb-10 max-w-[700px] rounded-lg bg-[#f9f9f9] p-5 text-center font-sans text-[#333] shadow-md">
        <Link
          to="/"
          className="mb-5 inline-block font-bold text-[#007bff] no-underline transition-colors duration-300 hover:text-[#0056b3]"
        >
          ⬅️ Back To Home
        </Link>

        <h1 className="mb-2 text-3xl">
          {coin
            ? `${coin.name} (${coin.symbol.toUpperCase()})`
            : "Coin Details"}
        </h1>

        {isLoading && <Spinner />}
        {error && <ErrorMessage message={error} />}

        {!isLoading && !error && coin && (
          <>
            <img
              src={coin.image.large}
              alt={coin.name}
              className="mx-auto mb-5 w-[100px]"
            />

            <p>
              {" "}
              {(coin.description?.en?.replace(/<[^>]*>/g, "") ?? "")
                .split(". ")
                .at(0) || ""}
              {coin.description?.en ? "." : ""}
            </p>

            <div className="m-5 flex flex-col gap-3 text-xl font-semibold text-[#222]">
              <p>Rank: #{coin.market_cap_rank}</p>
              <p>
                Current Price:{" "}
                {coin.market_data.current_price.usd.toLocaleString()}
              </p>
              <p>
                Market Cap ${coin.market_data.market_cap.usd.toLocaleString()}
              </p>
              <p>24h High: ${coin.market_data.high_24h.usd.toLocaleString()}</p>
              <p>24h Low: ${coin.market_data.low_24h.usd.toLocaleString()}</p>
              <p>
                24h Price Change: $
                {coin.market_data.price_change_24h.toFixed(2)} (
                {coin.market_data.price_change_percentage_24h.toFixed(2)}%)
              </p>
              <p>
                Circulating Supply:{" "}
                {coin.market_data.circulating_supply.toLocaleString()}
              </p>
              <p>
                Total Supply:{" "}
                {coin.market_data.total_supply?.toLocaleString() || "N/A"}
              </p>
              <p>
                All-Time High: ${coin.market_data.ath.usd.toLocaleString()} on{" "}
                {new Date(coin.market_data.ath_date.usd).toLocaleDateString()}
              </p>
              <p>
                All-Time Low: ${coin.market_data.atl.usd.toLocaleString()} on{" "}
                {new Date(coin.market_data.atl_date.usd).toLocaleDateString()}
              </p>
              <p>
                Last Updated: {new Date(coin.last_updated).toLocaleDateString()}
              </p>
            </div>

            <CoinChart coinId={coin.id} />

            <div className="mt-5 flex flex-col gap-2">
              {coin.links.homepage.find(Boolean) && (
                <p>
                  🌐{" "}
                  <a
                    href={coin.links.homepage.find(Boolean)!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007bff] no-underline hover:underline"
                  >
                    Website
                  </a>
                </p>
              )}
              {coin.links.blockchain_site.find(Boolean) && (
                <p>
                  🧩{" "}
                  <a
                    href={coin.links.blockchain_site.find(Boolean)!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007bff] no-underline hover:underline"
                  >
                    Blockchain Explorer
                  </a>
                </p>
              )}
              {coin.categories.length > 0 && (
                <p>Categories: {coin.categories.join(", ")}</p>
              )}
            </div>
          </>
        )}
      </div>

      {!isLoading && !error && !coin && <p>No Data Found!</p>}
    </div>
  );
}
