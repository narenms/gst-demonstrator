import React, { useState, useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";

function GSTDemonstrator() {
  const defaultLabelStyle = {
    fontSize: "10px",
    fontFamily: "sans-serif",
  };

  const [items, setItems] = useState([]);
  const [data, setData] = useState({
    name: "",
    price: "",
    gstSlab: "",
    gstPrice: "",
  });
  const [gst5, setGst5] = useState(0);
  const [gst12, setGst12] = useState(0);
  const [gst18, setGst18] = useState(0);
  const [gst28, setGst28] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
    if (name === "gstSlab" && value === "5") {
      setGst5(gst5 + 1);
    } else if (name === "gstSlab" && value === "12") {
      setGst12(gst12 + 1);
    } else if (name === "gstSlab" && value === "18") {
      setGst18(gst18 + 1);
    } else if (name === "gstSlab" && value === "28") {
      setGst28(gst28 + 1);
    }
  };

  const onSubmit = (e) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    // Using fetch to make API call.
    fetch(
      `http://api.mathjs.org/v4/?expr=${data.price}*${data.gstSlab}/100`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        setData((prevState) => ({
          ...prevState,
          gstPrice: data.price.to + result,
        }));
        setItems((prevArray) => [
          ...prevArray,
          { ...data, gstPrice: parseInt(data.price) + parseInt(result) },
        ]);
      })
      .catch((error) => console.log("error", error));

    setData({ name: "", price: "", gstSlab: "", gstPrice: "" });
  };

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

  return (
    <div className="container">
      <h1>GST Demonstrator</h1>

      <h2>Add a New Item</h2>
      <div className="form-group mb-2">
        <input
          type="string"
          value={data.name}
          name="name"
          placeholder="Enter Item Name"
          onChange={handleChange}
        />
        <input
          type="number"
          value={data.price}
          name="price"
          placeholder="Enter Item Price"
          onChange={handleChange}
        />
        <select value={data.gstSlab} name="gstSlab" onChange={handleChange}>
          <option>NA</option>
          <option value={5}>5</option>
          <option value={12}>12</option>
          <option value={18}>18</option>
          <option value={28}>28</option>
        </select>
        <button
          type="submit"
          onClick={onSubmit}
          className="btn btn-success mb-2"
        >
          Add Item
        </button>
      </div>

      <Table columns={columns} data={items} />

      <h2>Pie Chart</h2>
      <div className="w-50 h-50">
        <PieChart
          data={[
            { title: "5%", value: gst5, color: "#DAF7A6 " },
            { title: "12%", value: gst12, color: "#FFC300 " },
            { title: "18%", value: gst18, color: "#FF5733" },
            { title: "28%", value: gst28, color: "#C70039" },
          ]}
          style={{ height: "200px" }}
          radius={PieChart.defaultProps.radius - 6}
          segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
          animate
          labelStyle={{
            ...defaultLabelStyle,
          }}
        />
      </div>
    </div>
  );
}

export default GSTDemonstrator;
