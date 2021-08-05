import fakeStoreapi from "../../apis/fakeStoreApi";
import { actionTypes } from "../constants/action-types";

export const fetchProducts = () => async (dispatch) => {
  const response = await fakeStoreapi.get("/products");
  dispatch({ type: actionTypes.FETCH_PRODUCTS, payload: response.data });
};

export const fetchProduct = (id) => async (dispatch) => {
  const response = await fakeStoreapi.get(`/products/${id}`);
  dispatch({ type: actionTypes.SELECTED_PRODUCT, payload: response.data });
};

export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: actionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: actionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
