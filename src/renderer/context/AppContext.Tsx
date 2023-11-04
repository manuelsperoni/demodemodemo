import { createContext, useContext, useReducer } from 'react';
import appReducer from 'renderer/reducers/Reducers';
import { AppStateType, TimeSpanEnum } from 'renderer/types/Types';

const initialApp: AppStateType = {
  selectedTransaction: null,
  editTransactionOpened: false,
  transaction: [],
  directions: [
    {
      id: '1',
      description: 'expense',
    },
    {
      id: '2',
      description: 'income',
    },
  ],
  users: [
    {
      id: '1',
      description: 'Manuel Speroni',
    },
    {
      id: '2',
      description: 'Matilde Valentini',
    },
    {
      id: '3',
      description: 'Home',
    },
  ],
  categories: [
    {
      id: '1',
      description: 'bollette',
      subcategory: [
        {
          id: '1',
          description: 'gas',
        },
        {
          id: '2',
          description: 'luce',
        },
      ],
    },
    {
      id: '2',
      description: 'spesa',
      subcategory: [
        {
          id: '1',
          description: 'cibo',
        },
        {
          id: '2',
          description: 'altro',
        },
      ],
    },
  ],
  timespan: TimeSpanEnum.MONTHLY,
  filter: {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
  },
};

const AppContext = createContext<AppStateType>(initialApp);

const AppDispatchContext = createContext(null);

export function AppProvider({ children }) {
  const [app, dispatch] = useReducer(appReducer, initialApp);

  return (
    <AppContext.Provider value={app}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

export function useAppDispatch() {
  return useContext(AppDispatchContext);
}
