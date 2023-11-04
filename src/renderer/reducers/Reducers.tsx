import {
  ActionType,
  AppStateType,
  AppActionEnum,
  TimeSpanEnum,
} from 'renderer/types/Types';

export default function appReducer(
  app: AppStateType,
  action: ActionType
): AppStateType {
  console.log(action.type);

  switch (action.type) {
    case AppActionEnum.ADD_TRANSACTION: {
      return {
        ...app,
        transaction: [...app.transaction, action.transaction],
      };
    }
    case AppActionEnum.EDIT_TRANSACTION: {
      const index = app.transaction.findIndex(
        (el) => el.id === action.transaction.id
      );

      const updatedTransactions = [...app.transaction];
      updatedTransactions.splice(index, 1, action.transaction);

      return {
        ...app,
        transaction: updatedTransactions,
        editTransactionOpened: false,
      };
    }
    case AppActionEnum.DELETE_TRANSACTION: {
      const index = app.transaction.findIndex((el) => el.id === action.id);

      const updatedTransactions = [...app.transaction];
      updatedTransactions.splice(index, 1);
      return {
        ...app,
        transaction: updatedTransactions,
        editTransactionOpened: false,
        selectedTransaction: null,
      };
    }
    case AppActionEnum.SELECT_TRANSACTION: {
      return {
        ...app,
        selectedTransaction: action.transaction,
        editTransactionOpened: true,
      };
    }

    case AppActionEnum.CLOSE_EDIT_TRANSACTION: {
      return { ...app, editTransactionOpened: false };
    }

    case AppActionEnum.NEXT_TIMESPAN: {
      if (app.timespan === TimeSpanEnum.MONTHLY) {
        if (app.filter.month > 10) {
          return {
            ...app,
            filter: { ...app.filter, month: 0, year: app.filter.year + 1 },
          };
        }
        return {
          ...app,
          filter: { ...app.filter, month: app.filter.month + 1 },
        };
      }
      if (app.timespan === TimeSpanEnum.YEARLY)
        return {
          ...app,
          filter: { ...app.filter, year: app.filter.year + 1 },
        };
      return { ...app };
    }

    case AppActionEnum.PREVIOUS_TIMESPAN: {
      if (app.timespan === TimeSpanEnum.MONTHLY) {
        if (app.filter.month > 0) {
          return {
            ...app,
            filter: { ...app.filter, month: app.filter.month - 1 },
          };
        }
        return {
          ...app,
          filter: {
            ...app.filter,
            month: 0,
            year: app.filter.year - 1,
          },
        };
      }
      if (app.timespan === TimeSpanEnum.YEARLY)
        return {
          ...app,
          filter: { ...app.filter, year: app.filter.year - 1 },
        };
      return { ...app };
    }

    case AppActionEnum.SELECT_MONTHLY_TIMESPAN:
      return { ...app, timespan: TimeSpanEnum.MONTHLY };

    case AppActionEnum.SELECT_YEARLY_TIMESPAN:
      return { ...app, timespan: TimeSpanEnum.YEARLY };

    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}
