import { GetPokemonsAction, IGetPokemonsState } from './types';

export const getPokemonsDefault: IGetPokemonsState = {
  allPokemons: {
    data: [],
    isLoading: true,
    error: '',
  },
};

export const GET_POKEMONS_ACTION = '@pokemons/GET_POKEMONS_ACTION';
export const CLEAR_DATA_ACTION = '@pokemons/CLEAR_DATA_ACTION';

const getPokemonsReducer = (
  state = getPokemonsDefault,
  action: GetPokemonsAction
) => {
  switch (action.type) {
    case GET_POKEMONS_ACTION:
      return {
        ...state,
        allPokemons: {
          data: action.payload,
          isLoading: false,
        },
      };

    case CLEAR_DATA_ACTION:
      return {
        ...state,
        allPokemons: {
          isLoading: false,
        },
      };
    default:
      return state;
  }
};

export default getPokemonsReducer;
