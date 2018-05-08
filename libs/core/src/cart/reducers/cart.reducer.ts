import { Action } from '@ngrx/store';

import { CartActionTypes, CartActions } from '../actions/cart.actions';
import { Cart } from '../model/cart';

export interface State {
  cart: Cart,
  loading: boolean,
  errors: string[]
}

export const initialState: State = {
  cart: null,
  loading: false,
  errors: []
};

export const resetState: State = Object.assign({}, initialState);

export function reducer(state = initialState, action: CartActions): State {
  switch (action.type) {
    case CartActionTypes.CartLoadAction:
      return {...state, loading: true};
    case CartActionTypes.CartLoadSuccessAction:
      return {...state, cart: action.payload, loading: false};
    case CartActionTypes.CartLoadFailureAction:
      return {...state,
        loading: false,
        errors: state.errors.concat(new Array(action.payload))
      };
    case CartActionTypes.CartResetAction:
      return {
        ...resetState
      }
    default:
      return state;
  }
}

export const getCart = (state: State) => state.cart;

export const getCartLoading = (state: State) => state.loading;
