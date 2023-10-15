import { createContext, useContext, useReducer } from 'react';
import { ActionType, AppStateType, AppActionEnum } from 'renderer/types/Types';

const initialApp: AppStateType = {
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

function appReducer(app: AppStateType, action: ActionType): AppStateType {
  switch (action.type) {
    case AppActionEnum.ADD_TRANSACTION: {
      return {
        ...app,
        transaction: [...app.transaction, action.transaction],
      };
    }
    case AppActionEnum.EDIT_TRANSACTION: {
      return { ...app };
    }
    case AppActionEnum.REMOVE_TRANSACTION: {
      return { ...app };
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}
