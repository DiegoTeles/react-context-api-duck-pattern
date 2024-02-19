import { useReducer } from 'react';
import { StoreContext } from '../hooks/useStore';
import getAllPokemonsStateReducer from './pokemonsReducer';
import { IGetAllPokemonsStateProps } from './types';

export const GetAllPokemonsState = ({
  children,
}: IGetAllPokemonsStateProps) => {
  const initialState = {
    data: [],
    error: '',
    isLoading: true,
  };

  const [state, dispatch] = useReducer(
    getAllPokemonsStateReducer,
    initialState
  );

  const value = {
    state,
    dispatch,
  };

  return <StoreContext.Consumer {...value}>{children}</StoreContext.Consumer>;
};
