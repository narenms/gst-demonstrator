import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, selectItem } from "./itemSlice";

function DeleteItem() {
  const dispatch = useDispatch();
  const items = useSelector(selectItem);

  // const [value, setValue] = React.useState("");

  const columns = [
    { heading: "Name", property: "name" },
    { heading: "Price", property: "price" },
    { heading: "GST Slab", property: "gstSlab" },
    { heading: "GST Price", property: "gstPrice" },
    { heading: "", property: "button" },
  ];

  // const handleOptionChange = (e) => {
  //   setValue(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(deleteItem(value));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteItem(e.target.value));
  };

  return (
    <div>
      {/* <div className="container">
        <div className="d-flex justify-content-center">
          <div className="d-flex align-items-start flex-column">
            <h2>List of Items</h2> <br />
            <Table columns={columns} data={item} />
          </div>
        </div>
      </div> */}

      <div className="container-fluid">
        <div>
        <legend>Select an Item to erase from record</legend>
          <form>
            <table className="table table-bordered">
              <thead>
                <tr>
                  {columns.map((col, id) => (
                    <th key={id}>{col.heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {items.map((item, id) => (
                  <tr key={id}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.gstSlab}</td>
                    <td>{item.gstPrice}</td>
                    <td>
                      <button
                        type="submit"
                        value={item.name}
                        className="btn btn-primary"
                        onClick={handleSubmit}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DeleteItem;
