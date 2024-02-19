import { useReducer } from 'react';
import editUserReducer, {
  getPokemonsDefault,
} from '../GetPokemons/pokemonsReducer';

const usePokemonsStore = () => {
  const [allPokemonsStore, allPokemonsDispatch] = useReducer(
    editUserReducer,
    getPokemonsDefault
  );

  return { allPokemonsStore, allPokemonsDispatch };
};

export default usePokemonsStore;