import { AppStateType } from 'renderer/types/Types';

export type ActionType =
  | {
      type: 'EDIT_FIELD_DESCRIPTION';
      payload: {
        fieldId: string;
        updatedDescription: string;
      };
    }
  | {
      type: 'EDIT_FIELD_OPTION';
      payload: {
        fieldId: string;
        currentOption: string;
        updatedOption: string;
      };
    }
  | {
      type: 'REMOVE_FIELD_OPTION';
      payload: {
        fieldId: string;
        option: string;
      };
    }
  | {
      type: 'REMOVE_FIELD';
      payload: {
        fieldId: string;
      };
    }
  | {
      type: 'ADD_FIELD_OPTION';
      payload: {
        fieldId: string;
        option: string;
      };
    }
  | {
      type: 'ADD_RECORD';
      payload: {
        recordId: string;
      };
    }
  | {
      type: 'REMOVE_RECORD';
      payload: {
        recordId: string;
      };
    }
  | {
      type: 'EDIT_RECORD';
      payload: {
        recordId: string;
        fieldDescription: string;
        value: string;
      };
    }
  | {
      type: 'OPEN_EDIT_FIELD';
      payload: {
        fieldId: string;
      };
    }
  | {
      type: 'CLOSE_EDIT_FIELD';
    };

export default function appReducer(
  app: AppStateType,
  action: ActionType
): AppStateType {
  console.log(`Action type : ${action.type}`);
  console.log(`Action payload : ${action.payload}`);

  switch (action.type) {
    case 'EDIT_FIELD_DESCRIPTION':
      const oldDescription =
        app.fields[
          app.fields.findIndex((el) => el.id == action.payload.fieldId)
        ].description;
      if (oldDescription !== action.payload.updatedDescription)
        return {
          ...app,
          records: app.records.map((record) => {
            record[action.payload.updatedDescription] = record[oldDescription];
            delete record[oldDescription];
            return { ...record };
          }),
          fields: app.fields.map((field) => {
            if (field.id === action.payload.fieldId)
              return {
                ...field,
                description: action.payload.updatedDescription,
              };
            return field;
          }),
        };
      return app;

    case 'EDIT_FIELD_OPTION':
      return {
        ...app,
        fields: app.fields.map((field) => {
          if (field.id === action.payload.fieldId)
            return {
              ...field,
              values: field.values.map((value) => {
                if (value === action.payload.currentOption) {
                  return action.payload.updatedOption;
                }
                return value;
              }),
            };
          return field;
        }),
      };

    case 'REMOVE_FIELD_OPTION':
      return {
        ...app,
        fields: app.fields.map((field) => {
          if (field.id === action.payload.fieldId)
            return {
              ...field,
              values: field.values.filter(
                (value) => value !== action.payload.option
              ),
            };
          return field;
        }),
      };

    case 'REMOVE_FIELD':
      return {
        ...app,
        fields: app.fields.filter(
          (field) => field.id !== action.payload.fieldId
        ),
      };

    case 'ADD_FIELD_OPTION':
      return {
        ...app,
        fields: app.fields.map((field) => {
          if (field.id === action.payload.fieldId)
            return {
              ...field,
              values: [...field.values, action.payload.option],
            };
          return field;
        }),
      };

    case 'EDIT_RECORD':
      return {
        ...app,
        records: app.records.map((record) => {
          if (record.id === action.payload.recordId) {
            const updatedRecord = { ...record };
            updatedRecord[action.payload.fieldDescription] =
              action.payload.value;
            return updatedRecord;
          }
          return record;
        }),
      };

    case 'ADD_RECORD':
      const newRecord = { id: action.payload.recordId };
      app.fields.forEach((field) => {
        newRecord[field.description] = '';
      });
      return {
        ...app,
        records: [newRecord, ...app.records],
      };

    case 'REMOVE_RECORD':
      return {
        ...app,
        records: app.records.filter(
          (record) => record.id !== action.payload.recordId
        ),
      };

    case 'OPEN_EDIT_FIELD':
      return {
        ...app,
        selectedFieldId: action.payload.fieldId,
      };
    case 'CLOSE_EDIT_FIELD':
      return {
        ...app,
        selectedFieldId: null,
      };

    default: {
      throw Error(`Unknown action`);
    }
  }
}
