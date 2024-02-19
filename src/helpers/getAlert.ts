/* eslint-disable @typescript-eslint/no-explicit-any */
import { showAlertAction } from "../store/Application/alertReducer";

export const getAlert = (dispatch: any, data: any) => {
  dispatch(showAlertAction({ showAlert: data }));
};
