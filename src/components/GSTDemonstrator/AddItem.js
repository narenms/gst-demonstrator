import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewItem, selectItem } from "./itemSlice";

function AddItem() {
  const dispatch = useDispatch();

  const item = useSelector(selectItem);
  const columns = [
    { heading: "Name", property: "name" },
    { heading: "Price", property: "price" },
    { heading: "GST Slab", property: "gstSlab" },
    { heading: "GST Price", property: "gstPrice" },
  ];
  const Table = ({ columns, data }) => (
    <table className="table">
      <thead>
        <tr>
          {columns.map((col, id) => (
            <th key={id}>{col.heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, id) => (
          <tr key={id}>
            {columns.map((col) => (
              <td key={`${item}-${col.property}`}>{item[col.property]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  const [data, setData] = useState({
    name: "",
    price: "",
    gstSlab: "5",
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
        setData({ ...data, gstPrice: parseInt(data.price) + parseInt(result) });
        console.log(data);
        console.log("Calling dispatch");
        dispatch(addNewItem(data));
      })
      .catch((error) => console.log("error", error));
    setData({ name: "", price: "", gstSlab: "5", gstPrice: "" });

    e.preventDefault();
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        {/* <form> */}
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
        {/* </form> */}

        <Table columns={columns} data={item} />
      </div>
    </div>
  );
}

export default AddItem;
