import { randomUUID } from 'crypto';
import { ActionEnum, ActionType } from 'renderer/reducers/Reducers';
import { FieldType } from 'renderer/types/Types';

export function editFieldDescription(
  id: string,
  updatedDescription: string
): ActionType {
  return {
    type: ActionEnum.EDIT_FIELD_DESCRIPTION,
    payload: {
      id,
      updatedDescription,
    },
  };
}

export function editFieldOption(
  id: string,
  currentOption: string,
  updatedOption: string
): ActionType {
  return {
    type: ActionEnum.EDIT_FIELD_OPTION,
    payload: {
      id,
      currentOption,
      updatedOption,
    },
  };
}

export function removeFieldOption(id: string, option: string): ActionType {
  return {
    type: ActionEnum.REMOVE_FIELD_OPTION,
    payload: {
      id,
      option,
    },
  };
}

export function removeFieldAction(id: string): ActionType {
  return {
    type: ActionEnum.REMOVE_FIELD,
    payload: {
      id,
    },
  };
}

export function addFieldOption(id: string, option: string): ActionType {
  return {
    type: ActionEnum.ADD_FIELD_OPTION,
    payload: {
      id,
      option,
    },
  };
}

export function addRecord(): ActionType {
  return {
    type: ActionEnum.ADD_RECORD,
    payload: {
      id: crypto.randomUUID(),
    },
  };
}

export function removeRecord(id: string): ActionType {
  return {
    type: ActionEnum.REMOVE_RECORD,
    payload: {
      id,
    },
  };
}

export function editRecord(
  fieldDescription: string,
  id: string,
  value: string
): ActionType {
  return {
    type: ActionEnum.EDIT_RECORD,
    payload: {
      fieldDescription,
      id,
      value,
    },
  };
}

export function openEditFieldAction(field: FieldType): ActionType {
  return {
    type: ActionEnum.OPEN_EDIT_FIELD,
    payload: {
      field,
    },
  };
}
