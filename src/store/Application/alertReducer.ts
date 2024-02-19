type AlertData = {
  isOpen: boolean;
  type: string;
  message: string;
  title: string;
};
type AlertDefaultTypes = {
  showAlert: AlertData;
};

export const alertDefault: AlertDefaultTypes = {
  showAlert: {
    isOpen: false,
    type: '',
    message: '',
    title: '',
  },
};

export const ALERT_INC = '@alert/ALERT_INC';
export const ALERT_DEC = '@alert/ALERT_DEC';
export const ALERT_RESET = '@alert/ALERT_RESET';

const alertReducer = (state = alertDefault, action: any) => {
  switch (action.type) {
    case ALERT_INC:
      return {
        ...state,
        showAlert: {
          isOpen: action.payload.showAlert.isOpen,
          type: action.payload.showAlert.type,
          message: action.payload.showAlert.message,
          title: action.payload.showAlert.title,
        },
      };

    case ALERT_RESET:
      return {
        ...state,
        showAlert: {
          isOpen: false,
          type: '',
          message: '',
          title: '',
        },
      };
    default:
      return state;
  }
};

export const showAlertAction = (data: any) => {
  return {
    type: ALERT_INC,
    payload: data,
  };
};
export const resetAlertAction = () => {
  return {
    type: ALERT_RESET,
  };
};

export default alertReducer;
