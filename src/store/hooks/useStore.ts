/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, createContext } from 'react';
import { StoreAction, StoreState } from './types';

export const defaultStore: StoreState = {
  data: null,
};

export const StoreContext = createContext<{
  store: StoreState;
  dispatch: (action: StoreAction) => void;
}>({
  store: defaultStore,
  dispatch: () => {},
});

export default () => {
  return useContext(StoreContext);
};
