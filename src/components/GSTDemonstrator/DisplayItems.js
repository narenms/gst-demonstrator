import React from "react";
import { useSelector } from "react-redux";

function DisplayItems() {
  const item = useSelector(state => state.items);

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
      <div className="d-flex justify-content-center">
        <div className="d-flex align-items-start flex-column">
          <h2>List of Items</h2> <br />
          <Table columns={columns} data={item} />
        </div>
      </div>
    </div>
  );
}

export default DisplayItems;
