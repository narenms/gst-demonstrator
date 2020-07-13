import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems, deleteItem } from "../../actions/items";

function DeleteItem() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.items.items);

  useEffect(() => {
    console.log("useEffect()");
    dispatch(getItems());
  }, [dispatch]);

  const columns = [
    { heading: "Name", property: "name" },
    { heading: "Price", property: "price" },
    { heading: "GST Slab", property: "gstSlab" },
    { heading: "GST Price", property: "gstPrice" },
    { heading: "", property: "button" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteItem(e.target.value));
    dispatch(getItems());
    console.log("calling getItems()");
  };

  return (
    <div>
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
                        value={item.id}
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
