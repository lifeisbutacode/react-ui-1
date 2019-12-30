import React, {useState, useContext} from 'react';
import {Context} from '../context/ProductContext';
import axios from 'axios';

export default function Product() {
  
  const [payload, setPayload] = useState({});
  const [success, setSuccess] = useContext(Context);

  const handleKeyup = (e) => {
    setPayload({
      ...payload,
      [e.target.name] : e.target.value
    });
  };

  const handleKeyPress = (e) => {
    if(e.key === "Enter"){
      handleSubmit();
    }
  }

  const handleSubmit = () => {
    axios
      .post('api/product/create', payload)
      .then(res => {
        setSuccess(true)
        console.log(res.data.status)
      })
  }
  
  return (
    <div className="product">
      <h3>ADD A PRODUCT</h3>
      {/* Adding a Product */}
      <div>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" onKeyUp={handleKeyup} onKeyPress={handleKeyPress} name="name"/>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input type="text" onKeyUp={handleKeyup} onKeyPress={handleKeyPress} name="description"/>
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input type="text" onKeyUp={handleKeyup} onKeyPress={handleKeyPress} name="price"/>
        </div>

      </div>

      <button className="button" onClick={handleSubmit}>Add</button>


    </div>
  )
}
