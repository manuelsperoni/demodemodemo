import { createContext, useContext, useReducer } from 'react';
import appReducer from 'renderer/reducers/Reducers';
import { AppStateType, AvailableFieldEnum } from 'renderer/types/Types';

const initialApp: AppStateType = {
  records: [],
  fields: [
    {
      description: 'field1',
      values: ['manu', 'mati', 'pollo'],
      type: AvailableFieldEnum.USER,
    },
    {
      description: 'field2',
      values: ['a', 'b', 'c'],
      type: AvailableFieldEnum.USER,
    },
    {
      description: 'field3',
      values: ['manu', 'mati', 'pollo'],
      type: AvailableFieldEnum.USER,
    },
    {
      description: 'field4',
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

for (let index = 0; index < 50; index++) {
  const newRecord = { _id: index };
  initialApp.fields.forEach((field) => {
    newRecord[field.description] = `desc${index}`;
  });
  initialApp.records.push(newRecord);
}
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
