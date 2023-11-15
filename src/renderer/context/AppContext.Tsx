import { createContext, useContext, useReducer } from 'react';
import appReducer from 'renderer/reducers/Reducers';
import { AppStateType, AvailableFieldEnum } from 'renderer/types/Types';

const initialApp: AppStateType = {
  records: [[]],
  fields: [
    {
      description: 'username1',
      values: ['manu', 'mati', 'pollo'],
      type: AvailableFieldEnum.USER,
    },
    {
      description: 'username2',
      values: ['a', 'b', 'c'],
      type: AvailableFieldEnum.USER,
    },
     {
      description: 'username1',
      values: ['manu', 'mati', 'pollo'],
      type: AvailableFieldEnum.USER,
    },
    {
      description: 'username2',
      values: ['a', 'b', 'c'],
      type: AvailableFieldEnum.USER,
    },
    {
      description: 'username1',
      values: ['manu', 'mati', 'pollo'],
      type: AvailableFieldEnum.USER,
    },
    {
      description: 'username2',
      values: ['a', 'b', 'c'],
      type: AvailableFieldEnum.USER,
    },
     {
      description: 'username1',
      values: ['manu', 'mati', 'pollo'],
      type: AvailableFieldEnum.USER,
    },
    {
      description: 'username2',
      values: ['a', 'b', 'c'],
      type: AvailableFieldEnum.USER,
    },
  ],
  availableFields: [
    {
      description: 'user',
      type: AvailableFieldEnum.USER,
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
