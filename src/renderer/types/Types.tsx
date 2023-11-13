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
  SELECT_USER,
}
export type UserType = {
  id: string;
  description: string;
};
export type ActionType = {
  type: AppActionEnum;
  transaction?: any;
  id?: string;
  editTransactionOpened?: boolean;
  user?: UserType;
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
};

export type AppStateType = {
  fields: FieldType[];
  records: string[][];
  availableFields: AvailableFieldType[];
};

// keyToIndex()

// record.map(row,i=>
//     <Row>
//       row.map(field,j=>)
//           <Field fields[i][j].description index=fields[i][j]>Field</Field>
//     </Row>
//        )

const state: AppStateType = {
  records: [[]],
  fields: [
    {
      description: 'username',
      values: ['a', 'b', 'c'],
      type: AvailableFieldEnum.USER,
    },
    {
      description: 'tag',
      values: ['a', 'b', 'c'],
      type: AvailableFieldEnum.TAG,
    },
  ],
  availableFields: [
    {
      description: 'user',
      type: AvailableFieldEnum.USER,
    },
  ],
};

// test
const test = [{ d: 1 }, { d: 2 }, { d: 3 }];

// delete element with id
const deleteTest = test.filter((el) => el.d !== 3);

// update element with id
const updateTest = test.map((el) => (el.d === 3 ? { ...el, d: 22 } : el));

// create
const createTest = [...test, { d: 5 }];
