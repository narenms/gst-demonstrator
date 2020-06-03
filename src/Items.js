import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

function Items() {

  const [items, setItems] = useState([
    { name: "Ball", price: "10", gstSlab: "5", finalPrice: "10.5" },
    { name: "Bat", price: "20", gstSlab: "5", finalPrice: "21" }
  ])

  const [newItem, setNewItem] = useState({ name: "", price: "", gstSlab: "", finalPrice: "" })
  const [tempItem, setTempItem] = useState({ name: "", price: "", gstSlab: "", finalPrice: "" })
  // const [name, setName] = useState("")
  // const [price, setPrice] = useState("")
  // const [gstSlab, setGstSlab] = useState("")
  // const [finalPrice, setFinalPrice] = useState("")

  const isInitialMount = useRef(true);
  useEffect(() => {
    // To skip DidMount state and work similar to DidUpdate
    if (isInitialMount.current) {
      console.log("useEffect DidMount")
      isInitialMount.current = false
    } 
    else {
      console.log("useEffect Update")
      axios.get(`http://api.mathjs.org/v4/?expr=${newItem.price}*${newItem.gstSlab}/100`)
        .then(res => {
          console.log(res.data)
          setNewItem(newItem.finalPrice = newItem.price + res.data)
          setItems(...items, newItem)
        })
    }

  }, [newItem])

  const handleClick = () => {
    setNewItem(tempItem)
    console.log(newItem)
  }


  return (
    <div>

      {/* Add a new item to the item list */}
      <div>
        <form onSubmit={handleClick}>
          <input type="text" value={tempItem.name} onChange={e => setTempItem(e.target.value)} placeholder="Name" />
          <input type="text" value={tempItem.price} onChange={e => setTempItem(e.target.value)} placeholder="Price" />
          <select value={tempItem.gstSlab} onChange={e => setTempItem(e.target.value)}>
            <option>5</option>
            <option>12</option>
            <option>18</option>
            <option>28</option>
          </select>
          <button type="submit">Add Item</button>
        </form>
      </div>

      {/* Display the items */}
      <div>
        <h2>List of all the items</h2>
        <table>
          <caption>GST - Table</caption>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>GST - Slab</th>
              <th>Final Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map(
              (item, i) => (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.gstSlab}</td>
                  <td>{item.finalPrice}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Items
