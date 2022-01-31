import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";
const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(products);
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
