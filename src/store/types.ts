/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IStore {
  counter: number;
  showAlert: {
    isOpen: boolean;
    title: string;
    message: string;
  };
  allPokemons: {
    data: any[];
    isLoading: boolean;
    error: string;
  };
}
