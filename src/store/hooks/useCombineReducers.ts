import usePokemonsStore from '../GetPokemons';
import useApplicationStore from '../Application';

const useCombineReducers = () => {
  const { allPokemonsStore, allPokemonsDispatch } = usePokemonsStore();
  const { counterStore, counterDispatch, alertStore, alertDispatch } =
    useApplicationStore();

  return {
    store: {
      ...allPokemonsStore,
      ...alertStore,
      ...counterStore,
    },
    reducers: [counterDispatch, alertDispatch, allPokemonsDispatch],
  };
};

export default useCombineReducers;
