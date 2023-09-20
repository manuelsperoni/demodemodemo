import { createContext, useContext, useReducer } from 'react';

type AppStateUiType = {
  openPopup: boolean;
};

export enum TransactionFlow {
  INCOME,
  EXPENSE,
}

type TransactionType = {
  id: string;
  amount: number;
  userId: string;
  userName: string;
  description: string;
  cateogryId: string;
  category: string;
  subcategoryId: string;
  subcategory: string;
  creationDate: number;
  flow: TransactionFlow;
};

type AppStateType = {
  transaction: TransactionType[];
  ui: AppStateUiType;
};

const initialApp: AppStateType = {
  transaction: [],
  ui: { openPopup: false },
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

export enum AppAction {
  ADD_TRANSACTION,
  EDIT_TRANSACTION,
  REMOVE_TRANSACTION,
}

type ActionType = {
  type: AppAction;
  payload: any;
};

function appReducer(app: AppStateType, action: ActionType): AppStateType {
  switch (action.type) {
    case AppAction.ADD_TRANSACTION: {
      return {
        ...app,
        transaction: [
          ...app.transaction,
          {
            id: action.payload.id,
            amount: action.payload.amount,
            userId: action.payload.serId,
            userName: action.payload.userName,
            description: action.payload.description,
            cateogryId: action.payload.cateogryId,
            category: 'medone',
            subcategoryId: action.payload.subcategoryId,
            subcategory: action.payload.subcategory,
            creationDate: Date.now(),
            flow: action.payload.flow,
          },
        ],
      };
    }
    case AppAction.EDIT_TRANSACTION: {
      return {
        ...app,
        ui: { ...app.ui, openPopup: true },
      };
    }
    case AppAction.REMOVE_TRANSACTION: {
      return {
        ...app,
        ui: { ...app.ui, openPopup: true },
      };
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}
