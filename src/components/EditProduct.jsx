import React, { useState } from 'react';
import axios from 'axios';

const EditProduct = (props) => {
    const [product , setProduct] = useState({
        name: "",
        recipe: "",
        price: null
      })
      const url = 'http://localhost:8800/product/'; //backend route
    
      const handleChange = (e) => {
        setProduct(prevProduct => ({...prevProduct, [e.target.name]: e.target.value})); //updating Product element with input's value
      }
    
      const handleSubmit = async e => {
        e.preventDefault()
        try {
          await axios.put(url+props.p_id, product) //calling from backend
          alert("Product has been updated!");
          window.location.reload(); //automatically refreshes page
        } catch (err) {
            alert(err)
        }
        console.log(product)
      }
  return (props.trigger) ? (
    <div className='EditProduct'>
        <div className='EditProduct-inner'>
            <p>Edit Product #{props.p_id}</p>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Name'
                    name='name'
                    onChange={handleChange} />
                <input
                    type='number'
                    step=".01"
                    placeholder='Price'
                    name='price'
                    onChange={handleChange} />
                <input
                    type='text'
                    placeholder='Recipe'
                    name='recipe'
                    onChange={handleChange} />
                <button>Edit</button>
            </form>
            <button className='EditProduct-button' onClick={() => props.setTrigger(false)}>X</button> {/* closes modal */}
        </div>
    </div>
  ) : "";
}

export default EditProduct