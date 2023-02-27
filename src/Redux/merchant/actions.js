import {
  ADD_PRODUCT,
  SUBTRACT_FROM_STOCK,
  REVERT_TO_STOCK,
  REVERT_ALL_TO_STOCK,
} from "./actionTypes";

export function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
}

export function subtractFromStock(id) {
  return {
    type: SUBTRACT_FROM_STOCK,
    payload: id,
  };
}

export function revertToStock({ id, remainingInCart }) {
  return {
    type: REVERT_TO_STOCK,
    payload: { id, remainingInCart },
  };
}
export function revertAllToStock({ id, quantity }) {
  return {
    type: REVERT_ALL_TO_STOCK,
    payload: { id, quantity },
  };
}
