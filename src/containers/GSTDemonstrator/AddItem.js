import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewItem, addNewItemAsync, selectItem } from "./itemSlice";

function AddItem() {
  const item = useSelector(selectItem);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    price: "",
    gstSlab: "",
    gstPrice: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = (e) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    // Using fetch to make API call.
    fetch(
      `https://api.mathjs.org/v4/?expr=${data.price}%2A${data.gstSlab}%2F100`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        setData((prevState) => [
          ...prevState,
          { ...data, gstPrice: parseInt(data.price) + parseInt(result) },
        ]);
      })
      .catch((error) => console.log("error", error));
    dispatch(addNewItem(data));
    setData({ name: "", price: "", gstSlab: "", gstPrice: "" });
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <form>
          <div className="form-row">
            <h2>Add a New Item</h2>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputItemName">Name</label>
              <input
                type="string"
                className="form-control"
                id="inputItemName"
                placeholder="Name"
                value={data.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputItemPrice">Price</label>
              <input
                type="number"
                className="form-control"
                id="inputItemPrice"
                placeholder="Price"
                value={data.price}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="gstSlabControlSelect">Select GST Slab</label>
            <select
              className="form-control"
              id="gstSlabControlSelect"
              value={data.gstSlab}
              onChange={handleChange}
            >
              <option>5</option>
              <option>12</option>
              <option>18</option>
              <option>28</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary" onClick={onSubmit}>
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddItem;
