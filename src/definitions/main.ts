export type TMain = {
  status: 'loading' | 'loaded';
  data: TData[];
  currency: 'usd' | 'eur';
  order: 'market_cap_desc' | 'market_cap_asc';
  per_page: number;
  page: number;
  sparkline: boolean;
  totalCount: number;
};

export type TData = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: null;
  last_updated: string;
};

export type TMenuOption = {
  value: string;
  label: string;
};

export type TMarketProps = {
  vs_currency: TMain['currency'];
  order: TMain['order'];
  per_page: TMain['per_page'];
  page: TMain['page'];
  sparkline: TMain['sparkline'];
};
