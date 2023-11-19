import { AppStateType } from 'renderer/types/Types';

export enum ActionEnum {
  EDIT_FIELD_DESCRIPTION,
  EDIT_FIELD_OPTION,
  REMOVE_FIELD_OPTION,
  ADD_FIELD_OPTION,
  REMOVE_FIELD,
  ADD_RECORD,
  REMOVE_RECORD,
  EDIT_RECORD,
}

export type ActionType =
  | {
      type: ActionEnum.EDIT_FIELD_DESCRIPTION;
      payload: {
        currentDescription: string;
        updatedDescription: string;
      };
    }
  | {
      type: ActionEnum.EDIT_FIELD_OPTION;
      payload: {
        fieldDescription: string;
        currentOption: string;
        updatedOption: string;
      };
    }
  | {
      type: ActionEnum.REMOVE_FIELD_OPTION;
      payload: {
        fieldDescription: string;
        option: string;
      };
    }
  | {
      type: ActionEnum.REMOVE_FIELD;
      payload: {
        fieldDescription: string;
      };
    }
  | {
      type: ActionEnum.ADD_FIELD_OPTION;
      payload: {
        fieldDescription: string;
        option: string;
      };
    }
  | {
      type: ActionEnum.ADD_RECORD;
      payload: {
        _id: string;
      };
    }
  | {
      type: ActionEnum.REMOVE_RECORD;
      payload: {
        _id: string;
      };
    }
  | {
      type: ActionEnum.EDIT_RECORD;
      payload: {
        _id: string;
        fieldDescription: string;
        value: string;
      };
    };

export default function appReducer(
  app: AppStateType,
  action: ActionType
): AppStateType {
  console.log(action.type);
  switch (action.type) {
    case ActionEnum.EDIT_FIELD_DESCRIPTION:
      return {
        ...app,
        records: app.records.map((record) => {
          record[action.payload.updatedDescription] =
            record[action.payload.currentDescription];
          delete record[action.payload.currentDescription];
          return { ...record };
        }),
        fields: app.fields.map((field) => {
          if (field.description === action.payload.currentDescription)
            return { ...field, description: action.payload.updatedDescription };
          return field;
        }),
      };

    case ActionEnum.EDIT_FIELD_OPTION:
      return {
        ...app,
        fields: app.fields.map((field) => {
          if (field.description === action.payload.fieldDescription)
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
          if (field.description === action.payload.fieldDescription)
            return {
              ...field,
              values: field.values.filter(
                (value) => value != action.payload.option
              ),
            };
          return field;
        }),
      };

    case ActionEnum.REMOVE_FIELD:
      return {
        ...app,
        fields: app.fields.filter(
          (field) => field.description !== action.payload.fieldDescription
        ),
      };

    case ActionEnum.ADD_FIELD_OPTION:
      return {
        ...app,
        fields: app.fields.map((field) => {
          if (field.description === action.payload.fieldDescription)
            return {
              ...field,
              values: [...field.values, action.payload.option],
            };
          return field;
        }),
      };

    case ActionEnum.EDIT_RECORD:
      console.log(Date.now());
      return {
        ...app,
        records: app.records.map((record) => {
          if (record._id === action.payload._id) {
            const updatedRecord = { ...record };
            updatedRecord[action.payload.fieldDescription] =
              action.payload.value;
            return updatedRecord;
          }
          return record;
        }),
      };

    case ActionEnum.ADD_RECORD:
      const newRecord = { _id: action.payload._id };
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
          (record) => record._id !== action.payload._id
        ),
      };

    default: {
      throw Error(`Unknown action`);
    }
  }
}
