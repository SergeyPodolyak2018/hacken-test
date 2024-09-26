import { createContext, useReducer } from 'react';
import { MMain } from '../models/main';
import { TMain, TData } from '../definitions/main';

type TState = { main: TMain };

type TAction =
  | { type: 'SET_LOADING'; payload: TMain['status'] }
  | { type: 'ADD_MAIN_DATA'; payload: TData[] }
  | { type: 'CHANGE_CURENCY'; payload: TMain['currency'] }
  | { type: 'CHANGE_ORDER'; payload: TMain['order'] }
  | { type: 'CHANGE_PAGE'; payload: TMain['page'] }
  | { type: 'CHANGE_SIZE'; payload: TMain['per_page'] };

const counterReducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        main: {
          ...state.main,
          status: action.payload,
        },
      };
    case 'ADD_MAIN_DATA':
      return {
        ...state,
        main: {
          ...state.main,
          data: action.payload,
          status: 'loaded',
        },
      };
    case 'CHANGE_CURENCY':
      return {
        ...state,
        main: {
          ...state.main,
          currency: action.payload,
        },
      };
    case 'CHANGE_ORDER':
      return {
        ...state,
        main: {
          ...state.main,
          order: action.payload,
        },
      };
    case 'CHANGE_PAGE':
      return {
        ...state,
        main: {
          ...state.main,
          page: action.payload,
        },
      };
    case 'CHANGE_SIZE':
      return {
        ...state,
        main: {
          ...state.main,
          per_page: action.payload,
        },
      };

    default:
      return state;
  }
};

const initialState = {
  main: MMain,
};
const AppContext = createContext<{
  state: TState;
  dispatch: React.Dispatch<TAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

type ContextProviderProps = {
  children: React.ReactNode;
};

function StateProvider({ children }: ContextProviderProps) {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, StateProvider };
