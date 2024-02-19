import { Dispatch } from 'react';

interface Action {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

type DispatchFunction = Dispatch<Action>;

const middleware = (action: Action) => async (dispatch: DispatchFunction) => {
  await dispatch(action);
};

export default middleware;
