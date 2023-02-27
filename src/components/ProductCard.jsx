import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, increaseItem } from "../Redux/customer/actions";
import { subtractFromStock } from "../Redux/merchant/actions";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.products);
  const { name, category, imageUrl, price, quantity, id } = product;

  const stock = useSelector(
    (state) =>
      state.stock.products.find((product) => product.id === id).quantity
  );

  function handleAddToCart(product) {
    const hasInCart = cartProducts.some((product) => product.id === id);
    dispatch(subtractFromStock(id));
    dispatch(
      !hasInCart ? addToCart({ product, stock }) : increaseItem({ stock, id })
    );
  }

  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={imageUrl} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{name}</h4>
        <p className="lws-productCategory">{category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{quantity}</span>
          </p>
        </div>
        <button
          disabled={stock === 0}
          onClick={() => handleAddToCart(product)}
          className="lws-btnAddToCart"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
