import {
  AppActionEnum,
  ActionType,
  TransactionType,
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
