/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';
import { StoreContext } from './hooks/useStore';
import middleware from './middleware';
import useCombineReducers from './hooks/useCombineReducers';

interface ProviderProps {
  children: ReactNode;
}

interface Action {
  type: string;
  payload?: any;
}

const Provider = ({ children }: ProviderProps) => {
  const { store, reducers } = useCombineReducers();
  const triggerDispatchs = (action: any) => {
    for (let i = 0; i < reducers.length; i++) {
      reducers[i](action);
    }
  };

  const withMiddleware = async (action: Action) => {
    await middleware(action)(triggerDispatchs);
  };

  return (
    <StoreContext.Provider
      value={{
        store,
        dispatch: withMiddleware,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default Provider;
