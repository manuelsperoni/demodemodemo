import { randomUUID } from 'crypto';
import { ActionEnum, ActionType } from 'renderer/reducers/Reducers';

export function editFieldDescription(
  currentDescription: string,
  updatedDescription: string
): ActionType {
  return {
    type: ActionEnum.EDIT_FIELD_DESCRIPTION,
    payload: {
      currentDescription,
      updatedDescription,
    },
  };
}

export function editFieldOption(
  fieldDescription: string,
  currentOption: string,
  updatedOption: string
): ActionType {
  return {
    type: ActionEnum.EDIT_FIELD_OPTION,
    payload: {
      fieldDescription,
      currentOption,
      updatedOption,
    },
  };
}

export function removeFieldOption(
  fieldDescription: string,
  option: string
): ActionType {
  return {
    type: ActionEnum.REMOVE_FIELD_OPTION,
    payload: {
      fieldDescription,
      option,
    },
  };
}

export function removeField(fieldDescription: string): ActionType {
  return {
    type: ActionEnum.REMOVE_FIELD,
    payload: {
      fieldDescription,
    },
  };
}

export function addFieldOption(
  fieldDescription: string,
  option: string
): ActionType {
  return {
    type: ActionEnum.ADD_FIELD_OPTION,
    payload: {
      fieldDescription,
      option,
    },
  };
}

export function addRecord(): ActionType {
  return {
    type: ActionEnum.ADD_RECORD,
    payload: {
      _id: crypto.randomUUID(),
    },
  };
}

export function removeRecord(_id: string): ActionType {
  return {
    type: ActionEnum.REMOVE_RECORD,
    payload: {
      _id,
    },
  };
}

export function editRecord(
  fieldDescription: string,
  _id: string,
  value: string
): ActionType {
  return {
    type: ActionEnum.EDIT_RECORD,
    payload: {
      fieldDescription,
      _id,
      value,
    },
  };
}
