import { combineReducers } from "redux";
import { cartReducer } from "./customer/cartReducer";
import { stockReducer } from "./merchant/stockReducer";
const rootReducer = combineReducers({
  cart: cartReducer,
  stock: stockReducer,
});

export default rootReducer;
