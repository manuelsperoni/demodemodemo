import { NormalModule } from 'webpack';

export enum AppActionEnum {
  ADD_TRANSACTION,
  EDIT_TRANSACTION,
  REMOVE_TRANSACTION,
}
export type ActionType = {
  type: AppActionEnum;
  transaction?: any;
  id?: string;
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
  creationDate: string;
  directionDescription: string;
  directionId: string;
};

export type AppStateType = {
  transaction: TransactionType[];
  users: UserType[];
  categories: CategoryListType[];
  directions: DirectionType[];
};
