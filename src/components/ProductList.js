import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductCard from "./ProductCard";
import axios from "axios";

const ProductList = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  // const renderList = products.map((product) => {});

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("products", products);
  return (
    <div className="ui grid container">
      <br />
      <br />
      <ProductCard />
    </div>
  );
};

export default ProductList;
