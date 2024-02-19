import { useReducer } from 'react';
import counterReducer, { counterDefault } from '../Application/counter';
import alertReducer, { alertDefault } from '../Application/alertReducer';

const useApplicationStore = () => {
  const [alertStore, alertDispatch] = useReducer(alertReducer, alertDefault);

  const [counterStore, counterDispatch] = useReducer(
    counterReducer,
    counterDefault
  );

  return { counterStore, counterDispatch, alertStore, alertDispatch };
};

export default useApplicationStore;
