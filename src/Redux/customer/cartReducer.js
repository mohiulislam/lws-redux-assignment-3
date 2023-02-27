import { initialState } from "./initialState";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_ITEM,
  DECREASE_ITEM,
} from "./actionTypes";
export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      if (action.payload.stock > 0) {
        return {
          ...state,
          products: [
            ...state.products,
            { ...action.payload.product, quantity: 1 },
          ],
        };
      } else {
        return state;
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        products: [...state.products].filter(
          (product) => product.id !== action.payload
        ),
      };
    case INCREASE_ITEM:
      if (action.payload.stock > 0) {
        return {
          ...state,
          products: [...state.products].map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      } else {
        return state;
      }
    case DECREASE_ITEM:
      if (action.payload.remaining > 1) {
        console.log(111);
        
        return {
          ...state,
          products: [...state.products].map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity - 1 }
              : product
          ),
        };
      } else {
        return state;
      }
    default:
      return state;
  }
}
