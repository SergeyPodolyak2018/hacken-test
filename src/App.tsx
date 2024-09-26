import './App.css';

import { Header } from './components/header';
import { Menu } from './components/menu';
import { PaginationContainer } from './components/pagination';
import { TableMarket } from './components/table';
import { useMain } from './hooks/useMain';

function App() {
  const {
    changeCurency,
    changeOrder,
    changePage,
    changeSize,
    currency,
    order,
    data,
    status,
    page,
    per_page,
    totalCount,
  } = useMain();
  return (
    <div className='main_container'>
      <Header />
      <Menu
        currency={currency}
        order={order}
        changeCurency={changeCurency}
        changeOrder={changeOrder}
      />
      <TableMarket
        data={data}
        status={status}
        curecy={currency}
      />
      <PaginationContainer
        total={totalCount}
        current={page}
        size={per_page}
        changePage={changePage}
        changeSize={changeSize}
      />
    </div>
  );
}

export default App;
