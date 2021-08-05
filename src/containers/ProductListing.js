import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { fetchProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state);
  console.log(products);
  const dispatch = useDispatch()

  // const fetchProducts = async () => {
  //   const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((err) => {
  //       console.log("error", err);
  //     });
  //   dispatch(setProducts(response.data));
  // };


  
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log("products",products);
  return (
    <div className="ui grid container" style={{ marginTop: "50px" }}>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
