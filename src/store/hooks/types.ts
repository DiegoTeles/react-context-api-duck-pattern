/* eslint-disable @typescript-eslint/no-explicit-any */

export interface StoreState {
    data: any;
  }
  
  export interface StoreAction {
    type: string;
    payload?: any; 
  }
  
