import axios from "axios";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "./types";

// GET ITEMS
export const getItems = () => (dispatch, getState) => {
  axios
    .get("https://gst-django-app.herokuapp.com/items")
    .then((res) => {
      dispatch({ type: GET_ITEMS, payload: res.data });
    })
    .catch((error) => console.log("ERROR:", error));
};

// ADD ITEM
export const addItem = (item) => (dispatch, getState) => {
  axios
    .post("https://gst-django-app.herokuapp.com/items/", item)
    .then((res) => {
      dispatch({ type: ADD_ITEM, payload: res.data });
    })
    .catch((error) => console.log("ERROR:", error));
};

// DELETE ITEM
export const deleteItem = (id) => (dispatch, getState) => {
  axios
    .delete(`https://gst-django-app.herokuapp.com/items/${id}/`)
    .then((res) => {
      dispatch({ type: DELETE_ITEM, payload: id });
    })
    .catch((error) => console.log("ERROR:", error));
};
