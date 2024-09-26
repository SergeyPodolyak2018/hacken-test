export type TMenuProps = {
  currency: 'usd' | 'eur';
  order: 'market_cap_desc' | 'market_cap_asc';
  changeCurency: (value: 'usd' | 'eur') => void;
  changeOrder: (value: 'market_cap_desc' | 'market_cap_asc') => void;
};
