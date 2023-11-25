import { ActionType } from 'renderer/store/reducers';

export function editFieldDescriptionAction(
  fieldId: string,
  updatedDescription: string
): ActionType {
  return {
    type: 'EDIT_FIELD_DESCRIPTION',
    payload: {
      fieldId,
      updatedDescription,
    },
  };
}

export function editFieldOptionAction(
  fieldId: string,
  currentOption: string,
  updatedOption: string
): ActionType {
  return {
    type: 'EDIT_FIELD_OPTION',
    payload: {
      fieldId,
      currentOption,
      updatedOption,
    },
  };
}

export function removeFieldOptionAction(
  fieldId: string,
  option: string
): ActionType {
  return {
    type: 'REMOVE_FIELD_OPTION',
    payload: {
      fieldId,
      option,
    },
  };
}

export function removeFieldAction(fieldId: string): ActionType {
  return {
    type: 'REMOVE_FIELD',
    payload: {
      fieldId,
    },
  };
}

export function addFieldOptionAction(
  fieldId: string,
  option: string
): ActionType {
  return {
    type: 'ADD_FIELD_OPTION',
    payload: {
      fieldId,
      option,
    },
  };
}

export function addRecordAction(): ActionType {
  return {
    type: 'ADD_RECORD',
    payload: {
      recordId: crypto.randomUUID(),
    },
  };
}

export function removeRecordAction(recordId: string): ActionType {
  return {
    type: 'REMOVE_RECORD',
    payload: {
      recordId,
    },
  };
}

export function editRecordAction(
  fieldDescription: string,
  recordId: string,
  value: string
): ActionType {
  return {
    type: 'EDIT_RECORD',
    payload: {
      fieldDescription,
      recordId,
      value,
    },
  };
}

export function openEditFieldAction(fieldId: string): ActionType {
  return {
    type: 'OPEN_EDIT_FIELD',
    payload: {
      fieldId,
    },
  };
}

export function closeEditFieldAction(): ActionType {
  return {
    type: 'CLOSE_EDIT_FIELD',
  };
}
