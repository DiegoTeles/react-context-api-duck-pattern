export const counterDefault = {
  counter: 1,
};

export const COUNTER_INC = '@count/COUNTER_INC';
export const COUNTER_DEC = '@count/COUNTER_DEC';
export const COUNTER_RESET = '@count/COUNTER_RESET';

interface CounterDefaultTypes {
  type: string;
}

const counterReducer = (
  state = counterDefault,
  action: CounterDefaultTypes
) => {
  switch (action.type) {
    case COUNTER_INC:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case COUNTER_DEC:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case COUNTER_RESET:
      return {
        ...state,
        counter: 1,
      };
    default:
      return state;
  }
};

export const incrementAction = () => {
  return {
    type: COUNTER_INC,
  };
};
export const decrementAction = () => {
  return {
    type: COUNTER_DEC,
  };
};

export const resetAction = () => {
  return {
    type: COUNTER_RESET,
  };
};

export default counterReducer;
