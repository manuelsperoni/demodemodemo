import { AppStateType, FieldType } from 'renderer/types/Types';

export enum ActionEnum {
  EDIT_FIELD_DESCRIPTION,
  EDIT_FIELD_OPTION,
  REMOVE_FIELD_OPTION,
  ADD_FIELD_OPTION,
  REMOVE_FIELD,
  ADD_RECORD,
  REMOVE_RECORD,
  EDIT_RECORD,
  OPEN_EDIT_FIELD,
  CLOSE_EDIT_FIELD,
}

export type ActionType =
  | {
      type: ActionEnum.EDIT_FIELD_DESCRIPTION;
      payload: {
        id: string;
        updatedDescription: string;
      };
    }
  | {
      type: ActionEnum.EDIT_FIELD_OPTION;
      payload: {
        id: string;
        currentOption: string;
        updatedOption: string;
      };
    }
  | {
      type: ActionEnum.REMOVE_FIELD_OPTION;
      payload: {
        id: string;
        option: string;
      };
    }
  | {
      type: ActionEnum.REMOVE_FIELD;
      payload: {
        id: string;
      };
    }
  | {
      type: ActionEnum.ADD_FIELD_OPTION;
      payload: {
        id: string;
        option: string;
      };
    }
  | {
      type: ActionEnum.ADD_RECORD;
      payload: {
        id: string;
      };
    }
  | {
      type: ActionEnum.REMOVE_RECORD;
      payload: {
        id: string;
      };
    }
  | {
      type: ActionEnum.EDIT_RECORD;
      payload: {
        id: string;
        fieldDescription: string;
        value: string;
      };
    }
  | {
      type: ActionEnum.OPEN_EDIT_FIELD;
      payload: {
        fieldId: string;
      };
    }
  | {
      type: ActionEnum.CLOSE_EDIT_FIELD;
    };

export default function appReducer(
  app: AppStateType,
  action: ActionType
): AppStateType {
  console.log(action.type);
  switch (action.type) {
    case ActionEnum.EDIT_FIELD_DESCRIPTION:
      const oldDescription =
        app.fields[app.fields.findIndex((el) => el.id == action.payload.id)]
          .description;
      return {
        ...app,
        records: app.records.map((record) => {
          record[action.payload.updatedDescription] = record[oldDescription];
          delete record[oldDescription];
          return { ...record };
        }),
        fields: app.fields.map((field) => {
          if (field.id === action.payload.id)
            return { ...field, description: action.payload.updatedDescription };
          return field;
        }),
      };

    case ActionEnum.EDIT_FIELD_OPTION:
      return {
        ...app,
        fields: app.fields.map((field) => {
          if (field.id === action.payload.id)
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

    case ActionEnum.REMOVE_FIELD_OPTION:
      return {
        ...app,
        fields: app.fields.map((field) => {
          if (field.id === action.payload.id)
            return {
              ...field,
              values: field.values.filter(
                (value) => value !== action.payload.option
              ),
            };
          return field;
        }),
      };

    case ActionEnum.REMOVE_FIELD:
      return {
        ...app,
        fields: app.fields.filter((field) => field.id !== action.payload.id),
      };

    case ActionEnum.ADD_FIELD_OPTION:
      return {
        ...app,
        fields: app.fields.map((field) => {
          if (field.id === action.payload.id)
            return {
              ...field,
              values: [...field.values, action.payload.option],
            };
          return field;
        }),
      };

    case ActionEnum.EDIT_RECORD:
      return {
        ...app,
        records: app.records.map((record) => {
          if (record.id === action.payload.id) {
            const updatedRecord = { ...record };
            updatedRecord[action.payload.fieldDescription] =
              action.payload.value;
            return updatedRecord;
          }
          return record;
        }),
      };

    case ActionEnum.ADD_RECORD:
      const newRecord = { id: action.payload.id };
      app.fields.forEach((field) => {
        newRecord[field.description] = '';
      });
      return {
        ...app,
        records: [newRecord, ...app.records],
      };

    case ActionEnum.REMOVE_RECORD:
      return {
        ...app,
        records: app.records.filter(
          (record) => record.id !== action.payload.id
        ),
      };

    case ActionEnum.OPEN_EDIT_FIELD:
      return {
        ...app,
        selectedFieldId: action.payload.fieldId,
      };
    case ActionEnum.CLOSE_EDIT_FIELD:
      return {
        ...app,
        selectedFieldId: null,
      };

    default: {
      throw Error(`Unknown action`);
    }
  }
}
