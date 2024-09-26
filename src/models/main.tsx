import { TMain, TMenuOption } from '../definitions/main';

export const MMain: TMain = {
  status: 'loading',
  currency: 'usd',
  order: 'market_cap_desc',
  per_page: 10,
  page: 1,
  sparkline: false,
  totalCount: 1000,
  data: [],
};

export const MMenuCurency: TMenuOption[] = [
  {
    value: 'usd',
    label: 'USD',
  },
  {
    value: 'eur',
    label: 'EUR',
  },
];
export const MMenuOrder: TMenuOption[] = [
  {
    value: 'market_cap_asc',
    label: 'Market Cap Asc',
  },
  {
    value: 'market_cap_desc',
    label: 'Market Cap Desc',
  },
];
