/* eslint-disable @typescript-eslint/no-explicit-any */
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ConnectTo from './store/connect';
import { getAllPokemonsAction } from './store/GetPokemons/pokemonsAction';
import { getAlert } from './helpers';
import { incrementAction } from './store/Application/counter';
import AlertNotify from './components/AlertNotify';
import { messageSuccess } from './constants';
import { Dispatch } from 'react';
import { IStore } from './store/types';

interface AppProps {
  dispatch: Dispatch<any>;
  counter: number;
  showAlert: any;
}

function App({ dispatch, counter, showAlert }: AppProps) {
  const handleClick = () => {
    dispatch(incrementAction());
    getAlert(dispatch, messageSuccess.messageDeafault);
    getAllPokemonsAction(dispatch);
  };
  return (
    <>
      {showAlert.isOpen && <AlertNotify />}

      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <button onClick={handleClick}> Mais um: {counter}</button>
    </>
  );
}

const mapStateToProps = (store: IStore, props: any) => {
  const { children } = props;
  const { counter, showAlert, allPokemons } = store;
console.log('allPokemons :>> ', allPokemons);
  return {
    ...props,
    children,
    counter,
    showAlert,
    allPokemons,
  };
};

const ConnectedApp = ConnectTo(mapStateToProps)(App);

export default ConnectedApp;
