/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';
import { CLEAR_DATA_ACTION, GET_POKEMONS_ACTION } from './pokemonsReducer';

export interface IGetAllPokemonsStateProps {
  children: ReactNode;
}
interface IPokemon {
  data: any[];
  isLoading: boolean;
  error: string;
}
export interface IGetPokemonsState {
  allPokemons: IPokemon;
}

export interface IGetPokemonsAction {
  type: typeof GET_POKEMONS_ACTION;
  payload: any;
}

export interface IClearDataAction {
  type: typeof CLEAR_DATA_ACTION;
}

export type GetPokemonsAction = IGetPokemonsAction | IClearDataAction;
