import { ActionType, AppStateType, AppActionEnum } from 'renderer/types/Types';

export default function appReducer(
  app: AppStateType,
  action: ActionType
): AppStateType {
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
    case AppActionEnum.REMOVE_TRANSACTION: {
      return { ...app };
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
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}
