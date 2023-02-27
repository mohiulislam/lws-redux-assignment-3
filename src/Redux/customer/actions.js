import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_ITEM,
  DECREASE_ITEM,
} from "./actionTypes";

export function addToCart({ product, stock }) {
  return {
    type: ADD_TO_CART,
    payload: { product, stock },
  };
}
export function removeFromCart(id) {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
}
export function increaseItem({ stock, id }) {
  return {
    type: INCREASE_ITEM,
    payload: { stock, id },
  };
}
export function decreaseItem({ quantity: remaining, id }) {
  return {
    type: DECREASE_ITEM,
    payload: { remaining, id },
  };
}
