import React from 'react';

import { AppContext } from '../store/store';
import restApi from '../api/rest';

export function useMain() {
  const globalState = React.useContext(AppContext);
  const { state, dispatch } = globalState;

  React.useEffect(() => {
    dispatch({
      type: 'SET_LOADING',
      payload: 'loading',
    });
    restApi
      .getMarkets({
        vs_currency: state.main.currency,
        order: state.main.order,
        per_page: state.main.per_page,
        page: state.main.page,
        sparkline: state.main.sparkline,
      })
      .then((data) => {
        dispatch({
          type: 'ADD_MAIN_DATA',
          payload: data,
        });
      });
  }, [
    state.main.currency,
    state.main.order,
    state.main.page,
    state.main.per_page,
  ]);

  const changeCurency = (value: 'usd' | 'eur') => {
    dispatch({
      type: 'CHANGE_CURENCY',
      payload: value,
    });
  };
  const changeOrder = (value: 'market_cap_desc' | 'market_cap_asc') => {
    dispatch({
      type: 'CHANGE_ORDER',
      payload: value,
    });
  };
  const changePage = (value: number) => {
    dispatch({
      type: 'CHANGE_PAGE',
      payload: value,
    });
  };
  const changeSize = (value: number) => {
    dispatch({
      type: 'CHANGE_SIZE',
      payload: value,
    });
  };

  // const getData = async () => {
  //   const getDataAfterTime = dataWithTimer(aboutMockData);
  //   const result = await getDataAfterTime(5000);
  //   dispatch({
  //     type: 'ADD_ABOUT_DATA',
  //     payload: result,
  //   });
  // };

  return {
    ...state.main,
    changeCurency,
    changeOrder,
    changePage,
    changeSize,
  };
}
