import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../actions/items";

function AddItem() {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    name: "",
    price: "",
    gstSlab: "5",
    gstPrice: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem(data));
    setData({ name: "", price: "", gstSlab: "5", gstPrice: "0" });
  };

  return (
    <div className="container">
      <div>
        <h2>Add a New Item</h2>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputItemName">Name</label>
              <input
                type="string"
                className="form-control"
                id="inputItemName"
                name="name"
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
                name="price"
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
              name="gstSlab"
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
