import { Dispatch } from 'react';
import client from '../../graphql/client';
import { GET_POKEMONS_QUERIE } from '../../graphql/queries/pokemons';

import { CLEAR_DATA_ACTION, GET_POKEMONS_ACTION } from './pokemonsReducer';
import { GetPokemonsAction } from './types';

export const getAllPokemonsAction = async (
  dispatch: Dispatch<GetPokemonsAction>,
  variables = {}
) => {
  const response = await client.request(GET_POKEMONS_QUERIE, variables);

  dispatch({
    type: GET_POKEMONS_ACTION,
    payload: response,
  });
};

export const clearEditData = async (dispatch: Dispatch<GetPokemonsAction>) => {
  dispatch({
    type: CLEAR_DATA_ACTION,
  });
};
