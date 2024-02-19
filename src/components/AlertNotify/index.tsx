import { useEffect } from 'react';
import ConnectTo from '../../store/connect';
import { resetAlertAction } from '../../store/Application/alertReducer';
import { IStore } from '../../store/types';

interface AlertNotifyProps {
  dispatch: (func: unknown) => void;
  showAlert: {
    isOpen: boolean;
    title: string;
    message: string;
  };
}

function AlertNotify({ dispatch, showAlert }: AlertNotifyProps) {
  useEffect(() => {
    if (showAlert.isOpen) {
      const timer = setTimeout(() => {
        dispatch(resetAlertAction());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [dispatch, showAlert.isOpen]);

  return (
    <div>
      <h3>{showAlert.title}</h3>
      {showAlert.message}
    </div>
  );
}

const mapStateToProps = (store: IStore, props: any) => {
  const { children } = props;
  const { counter, showAlert } = store;
  return {
    ...props,
    children,
    counter,
    showAlert,
  };
};

const ConnectedAlertNotify = ConnectTo(mapStateToProps)(AlertNotify);

export default ConnectedAlertNotify;
