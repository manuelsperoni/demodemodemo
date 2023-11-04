import { NormalModule } from 'webpack';

export enum AppActionEnum {
  ADD_TRANSACTION,
  EDIT_TRANSACTION,
  SELECT_TRANSACTION,
  CLOSE_EDIT_TRANSACTION,
  DELETE_TRANSACTION,
  SELECT_YEARLY_TIMESPAN,
  SELECT_MONTHLY_TIMESPAN,
  PREVIOUS_TIMESPAN,
  NEXT_TIMESPAN,
}
export type ActionType = {
  type: AppActionEnum;
  transaction?: any;
  id?: string;
  editTransactionOpened?: boolean;
};
export type UserType = {
  id: string;
  description: string;
};
export type SubcategoryType = {
  id: string | null;
  description: string | null;
};
export type CategoryType = {
  id: string;
  description: string;
};
export type CategoryListType = {
  id: string;
  description: string;
  subcategory?: SubcategoryType[];
};
export type DirectionType = {
  id: string;
  description: string;
};

export enum TransactionDirectionEnum {
  INCOME,
  EXPENSE,
}

export type TransactionType = {
  id: string;
  amount: string;
  userId: string;
  userDescription: string;
  description: string;
  categoryId: string;
  categoryDescription: string;
  subcategoryId: string | null;
  subcategoryDescription: string | null;
  date: string;
  directionDescription: string;
  directionId: string;
};

export enum TimeSpanEnum {
  YEARLY,
  MONTHLY,
}

export type AppStateType = {
  transaction: TransactionType[];
  users: UserType[];
  categories: CategoryListType[];
  directions: DirectionType[];
  selectedTransaction: TransactionType | null;
  editTransactionOpened: boolean;
  timespan: TimeSpanEnum;
  filter: any;
};
