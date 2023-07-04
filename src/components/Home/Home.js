import React from "react";
import Product from "../Products/Product/Product";

const Home = ({ products, handleAddToCart, handleUpdateCartQty }) => {
  return (
    <div>
      <Product
        products={products}
        onAddToCart={handleAddToCart}
        handleUpdateCartQty
      />
    </div>
  );
};

export default Home;
