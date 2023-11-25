export enum AppActionEnum {
  ADD_TRANSACTION,
  EDIT_TRANSACTION,
  SELECT_TRANSACTION,
  CLOSE_EDIT_TRANSACTION,
  REMOVE_TRANSACTION,
  SELECT_YEARLY_TIMESPAN,
  SELECT_MONTHLY_TIMESPAN,
  PREVIOUS_TIMESPAN,
  NEXT_TIMESPAN,
  SELECT_USER,
}
export type UserType = {
  id: string;
  description: string;
};
// export type ActionType = {
//   type: AppActionEnum;
//   transaction?: any;
//   id?: string;
//   editTransactionOpened?: boolean;
//   user?: UserType;
// };

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

// NEEEWWW

export enum AvailableFieldEnum {
  USER,
  DATE,
  TAG,
  TEXT,
  CURRENCY,
  DURATION,
}

export type AvailableFieldType = {
  description: string;
  type: AvailableFieldEnum;
};

export type FieldType = {
  description: string;
  type: AvailableFieldEnum;
  values: string[];
  id: string;
};

export type AppStateType = {
  fields: FieldType[];
  records: any[];
  availableFields: AvailableFieldType[];
  selectedFieldId: string | null;
};
