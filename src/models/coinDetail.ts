export interface CoinDetail {
  id: string;
  symbol: string;
  name: string;

  image: {
    thumb: string;
    small: string;
    large: string;
  };

  description: {
    en?: string;
  };

  links: {
    homepage: string[];
    blockchain_site: string[];
  };

  categories: string[];

  market_cap_rank?: number;

  market_data: {
    current_price: { usd: number };
    market_cap: { usd: number };
    high_24h: { usd: number };
    low_24h: { usd: number };

    price_change_24h: number;
    price_change_percentage_24h: number;

    circulating_supply: number;
    total_supply: number | null;

    ath: { usd: number };
    ath_date: { usd: string };
    atl: { usd: number };
    atl_date: { usd: string };
  };

  last_updated: string;
}
