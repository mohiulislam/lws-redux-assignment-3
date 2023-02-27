import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItem,
  increaseItem,
  removeFromCart,
} from "../Redux/customer/actions";
import {
  revertAllToStock,
  revertToStock,
  subtractFromStock,
} from "../Redux/merchant/actions";

function CartCard({
  cartItem: { name, category, imageUrl, price, quantity, id },
}) {
  const dispatch = useDispatch();
  const stock = useSelector(
    (state) =>
      state.stock.products.find((product) => product.id === id).quantity
  );

  function handleDelete() {
    dispatch(removeFromCart(id));
    dispatch(revertAllToStock({ quantity, id }));
  }
  function handleIncrement() {
    dispatch(increaseItem({ stock, id }));
    dispatch(subtractFromStock(id));
  }
  function handleDecrement() {
    dispatch(decreaseItem({ quantity, id }));
    dispatch(revertToStock({ remainingInCart: quantity, quantity: 1, id }));
  }

  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        <img className="lws-cartImage" src={imageUrl} alt="product" />
        <div className="space-y-2">
          <h4 className="lws-cartName">{name}</h4>
          <p className="lws-cartCategory">{category}</p>
          <p>
            BDT <span className="lws-cartPrice">{price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => handleIncrement()}
            className="lws-incrementQuantity"
          >
            <i className="text-lg ">
              <FaPlus />
            </i>
          </button>
          <span className="lws-cartQuantity">{quantity}</span>
          <button
            onClick={() => handleDecrement()}
            className="lws-decrementQuantity"
          >
            <i className="text-lg ">
              <FaMinus />
            </i>
          </button>
        </div>
        <p className="text-lg font-bold">
          BDT <span className="lws-calculatedPrice">{price * quantity}</span>
        </p>
      </div>
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button onClick={() => handleDelete()} className="lws-removeFromCart">
          <i className="text-lg text-red-400">
            <FaTrash />
          </i>
        </button>
      </div>
    </div>
  );
}

export default CartCard;
