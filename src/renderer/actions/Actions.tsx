import {
  AppActionEnum,
  ActionType,
  TransactionType,
} from 'renderer/types/Types';

export function addTransaction(transaction: TransactionType): ActionType {
  return { type: AppActionEnum.ADD_TRANSACTION, transaction };
}
export function removeTransaction(id: string): ActionType {
  return { type: AppActionEnum.ADD_TRANSACTION, id };
}
export function editTransaction(id: string): ActionType {
  return { type: AppActionEnum.ADD_TRANSACTION, id };
}
