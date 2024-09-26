export type TPaginationProps = {
  total: number;
  current: number;
  size: number;
  changeSize: (value: number) => void;
  changePage: (value: number) => void;
};
