import axios from "axios";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "./types";

// GET ITEMS
export const getItems = () => (dispatch, getState) => {
  axios
    .get("http://localhost:8000/api/items/")
    .then((res) => {
      dispatch({ type: GET_ITEMS, payload: res.data });
    })
    .catch((error) => console.log("ERROR:", error));
};

// ADD ITEM
export const addItem = (item) => (dispatch, getState) => {
  axios
    .post("http://localhost:8000/api/items/", item)
    .then((res) => {
      dispatch({ type: ADD_ITEM, payload: res.data });
    })
    .catch((error) => console.log("ERROR:", error));
};

// DELETE ITEM
export const deleteItem = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/items/${id}/`)
    .then((res) => {
      dispatch({ type: DELETE_ITEM, payload: id });
    })
    .catch((error) => console.log("ERROR:", error));
};
