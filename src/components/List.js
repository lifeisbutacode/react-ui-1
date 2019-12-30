import React, {useState, useEffect, useContext} from 'react';
import {Context} from '../context/ProductContext';
import axios from 'axios'

export default function List() {

  let products = "";
  const [body, setBody] = useState({});
  const [success, setSuccess] = useContext(Context);
  const fetchProduct = () => {
    axios
    .get('api/product')
    .then(res => {
      setBody(res.data.body);
      setSuccess(false);
    });
  }

  useEffect(() => {
    fetchProduct();
  }, [success]);
  
  // Product list exists
  if(body.length >= 1) {
    products = body.map((i) => 
      <tr key={i.id}>
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
