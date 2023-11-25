import { randomUUID } from 'crypto';
import { ActionEnum, ActionType } from 'renderer/reducers/Reducers';
import { FieldType } from 'renderer/types/Types';

export function editFieldDescriptionAction(
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

export function editFieldOptionAction(
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

export function removeFieldOptionAction(
  id: string,
  option: string
): ActionType {
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

export function addFieldOptionAction(id: string, option: string): ActionType {
  return {
    type: ActionEnum.ADD_FIELD_OPTION,
    payload: {
      id,
      option,
    },
  };
}

export function addRecordAction(): ActionType {
  return {
    type: ActionEnum.ADD_RECORD,
    payload: {
      id: crypto.randomUUID(),
    },
  };
}

export function removeRecordAction(id: string): ActionType {
  return {
    type: ActionEnum.REMOVE_RECORD,
    payload: {
      id,
    },
  };
}

export function editRecordAction(
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

export function openEditFieldAction(fieldId: string): ActionType {
  return {
    type: ActionEnum.OPEN_EDIT_FIELD,
    payload: {
      fieldId,
    },
  };
}

export function closeEditFieldAction(): ActionType {
  return {
    type: ActionEnum.CLOSE_EDIT_FIELD,
  };
}
