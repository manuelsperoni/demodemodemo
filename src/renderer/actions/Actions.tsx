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
export function editTransactionAction(id: string): ActionType {
  return { type: AppActionEnum.ADD_TRANSACTION, id };
}
