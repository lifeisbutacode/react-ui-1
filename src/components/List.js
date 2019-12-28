import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function List() {

  let products = "";
  const [body, setBody] = useState({});

  useEffect(() => {
    axios
      .get('api/product')
      .then(res => {
        console.log(res.data.body)
        setBody(res.data.body);
      });
  }, [])
  
  // Product list exists
  if(body.length >= 1) {
    products = body.map((i) => 
      <tr>
        <td> {i.name.toUpperCase()} </td>
        <td> {i.description.toUpperCase()} </td>
        <td> {i.price} </td>
      </tr>
    )
  } else {
    products =<tr><td colSpan={3} style={{"textAlign" : "center"}} >NO PRODUCT FOUND</td></tr>
  }

  return (
    <div className="list">
      <h3>LIST</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {products}
        </tbody>
      </table>
    </div>
  )
}
