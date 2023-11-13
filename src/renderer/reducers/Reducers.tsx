import { ActionType, AppStateType } from 'renderer/types/Types';

export default function appReducer(
  app: AppStateType,
  action: ActionType
): AppStateType {
  switch (action.type) {
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}
