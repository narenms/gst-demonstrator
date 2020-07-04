import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { useSelector } from "react-redux";
import { selectItem } from "./itemSlice";

function DisplayItems() {
  const defaultLabelStyle = {
    fontSize: "10px",
    fontFamily: "sans-serif",
  };

  const item = useSelector(selectItem);

  const gst5 = item.filter((obj) => obj.gstSlab === "5").length;
  const gst12 = item.filter((obj) => obj.gstSlab === "12").length;
  const gst18 = item.filter((obj) => obj.gstSlab === "18").length;
  const gst28 = item.filter((obj) => obj.gstSlab === "28").length;

  const columns = [
    { heading: "Name", property: "name" },
    { heading: "Price", property: "price" },
    { heading: "GST Slab", property: "gstSlab" },
    { heading: "GST Price", property: "gstPrice" },
  ];

  const Table = ({ columns, data }) => (
    <table className="table table-bordered">
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
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6">
          <h2>List of Items</h2> <br />
          <Table columns={columns} data={item} />
        </div>
        <div className="col-sm-6">
          <h2>Pie Chart</h2>
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
            // label={({ dataEntry }) => dataEntry.value}
            labelStyle={{
              ...defaultLabelStyle,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default DisplayItems;
