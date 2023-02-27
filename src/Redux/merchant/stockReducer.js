import { initialState } from "./initialState";
import {
  ADD_PRODUCT,
  SUBTRACT_FROM_STOCK,
  REVERT_TO_STOCK,
  REVERT_ALL_TO_STOCK,
} from "./actionTypes";
export function stockReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products,
          {
            ...action.payload,
            id: Math.abs(Math.floor(Math.random()) - Date.now()),
          },
        ],
      };
    case SUBTRACT_FROM_STOCK:
      if (
        state.products.find((product) => product.id === action.payload)
          .quantity > 0
      ) {
        return {
          ...state,
          products: [...state.products].map((product) =>
            product.id === action.payload
              ? {
                  ...product,
                  quantity: product.quantity - 1,
                }
              : product
          ),
        };
      } else {
        return state;
      }
    case REVERT_TO_STOCK:
      if (action.payload.remainingInCart > 1) {
        return {
          ...state,
          products: [...state.products].map((product) =>
            product.id === action.payload.id
              ? {
                  ...product,
                  quantity: product.quantity + 1,
                }
              : product
          ),
        };
      } else {
        return state;
      }
    case REVERT_ALL_TO_STOCK:
      return {
        ...state,
        products: [...state.products].map((product) =>
          product.id === action.payload.id
            ? {
                ...product,
                quantity: product.quantity + action.payload.quantity,
              }
            : product
        ),
      };
    default:
      return state;
  }
}
