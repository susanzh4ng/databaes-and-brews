import React, { useState } from 'react';
import axios from 'axios';

const CreateProduct = (props) => {
    const [product , setProduct] = useState({
        name: "",
        recipe: "",
        price: null
    })
    
      const handleChange = (e) => {
        setProduct(prevProduct => ({...prevProduct, [e.target.name]: e.target.value})); //updating Product element with input's value
      }
    
      const handleSubmit = async e => {
        e.preventDefault()
        try {
          await axios.post('http://localhost:8800/product', product) //calling from backend
          alert("Product has been created!");
          window.location.reload(); //automatically refreshes page
        } catch (err) {
            alert(err)
        }
        console.log(product)
      }
  return (props.trigger) ? (
    <div className='CreateProduct'>
        <div className='CreateProduct-inner'>
            <p>Create a product</p>
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
                <button>Create</button>
            </form>
            <button className='CreateProduct-button' onClick={() => props.setTrigger(false)}>X</button> {/* closes modal */}
        </div>
    </div>
  ) : "";
}

export default CreateProduct