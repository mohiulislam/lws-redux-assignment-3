import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Nav from "../layouts/Nav";
import { addProduct } from "../Redux/merchant/actions";

function Home() {
  const products = useSelector((state) => state.stock.products);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    imageUrl: "",
    price: null,
    quantity: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: name === "price" || name === "quantity" ? +value : value,
    }));
  };

  function handleAddProduct(event) {
    event.preventDefault();
    dispatch(addProduct(formData));
  }
  return (
    <Fragment>
      <Nav />
      <main className="py-16">
        <div className="productWrapper">
          <div className="productContainer" id="lws-productContainer">
            {products.length > 0
              ? products.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))
              : "No Product Found"}
          </div>
          <div>
            <div className="formContainer">
              <h4 className="formTitle">Add New Product</h4>
              <form
                onSubmit={(event) => handleAddProduct(event)}
                className="space-y-4 text-[#534F4F]"
                id="lws-addProductForm"
              >
                <div className="space-y-2">
                  <label htmlFor="lws-inputName">Product Name</label>
                  <input
                    required
                    onChange={handleInputChange}
                    name="productName"
                    className="addProductInput"
                    id="lws-inputName"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lws-inputCategory">Category</label>
                  <input
                    required
                    onChange={handleInputChange}
                    name="productCategory"
                    className="addProductInput"
                    id="lws-inputCategory"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lws-inputImage">Image Url</label>
                  <input
                    required
                    onChange={handleInputChange}
                    name="imageUrl"
                    className="addProductInput"
                    id="lws-inputImage"
                    type="text"
                  />
                </div>
                <div className="grid grid-cols-2 gap-8 pb-4">
                  <div className="space-y-2">
                    <label htmlFor="ws-inputPrice">Price</label>
                    <input
                      required
                      onChange={handleInputChange}
                      name="price"
                      className="addProductInput"
                      type="number"
                      id="lws-inputPrice"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lws-inputQuantity">Quantity</label>
                    <input
                      required
                      onChange={handleInputChange}
                      name="quantity"
                      className="addProductInput"
                      type="number"
                      id="lws-inputQuantity"
                    />
                  </div>
                </div>
                <button type="submit" id="lws-inputSubmit" className="submit">
                  Add Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default Home;
