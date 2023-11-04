import {
  AppActionEnum,
  ActionType,
  TransactionType,
  UserType,
} from 'renderer/types/Types';

export function addTransactionAction(transaction: TransactionType): ActionType {
  return { type: AppActionEnum.ADD_TRANSACTION, transaction };
}
export function removeTransactionAction(id: string): ActionType {
  return { type: AppActionEnum.ADD_TRANSACTION, id };
}

export function selectTransactionAction(
  transaction: TransactionType
): ActionType {
  return { type: AppActionEnum.SELECT_TRANSACTION, transaction };
}
export function editTransactionAction(
  transaction: TransactionType
): ActionType {
  return { type: AppActionEnum.EDIT_TRANSACTION, transaction };
}

export function closeEditTransactionAction(): ActionType {
  return { type: AppActionEnum.CLOSE_EDIT_TRANSACTION };
}

export function deleteTransactionAction(id: string): ActionType {
  return { type: AppActionEnum.DELETE_TRANSACTION, id };
}

export function nextTimeSpanAction(): ActionType {
  return { type: AppActionEnum.NEXT_TIMESPAN };
}

export function previousTimeSpanAction(): ActionType {
  return { type: AppActionEnum.PREVIOUS_TIMESPAN };
}

export function selectMonthlyTimeSpanAction(): ActionType {
  return { type: AppActionEnum.SELECT_MONTHLY_TIMESPAN };
}

export function selectYearlyTimeSpanAction(): ActionType {
  return { type: AppActionEnum.SELECT_YEARLY_TIMESPAN };
}

export function selectUserAction(user: UserType): ActionType {
  return { type: AppActionEnum.SELECT_USER, user };
}
