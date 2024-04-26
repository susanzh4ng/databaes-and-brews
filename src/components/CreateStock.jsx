import React, { useState } from 'react';
import axios from 'axios';

const CreateStock = (props) => {
    const [stock, setStock] = useState({
        cafe_c_id: null,
        product_p_id: null
      })
    
      const handleChange = (e) => {
        setStock(prevStock => ({...prevStock, [e.target.name]: e.target.value})); //updating Stock element with input's value
      }
    
      const handleSubmit = async e => {
        e.preventDefault()
        try {
          await axios.post('http://localhost:8800/sold_in', stock) //calling from backend
          alert("Stock has been created!");
          window.location.reload(); //automatically refreshes page
        } catch (err) {
            console.log(err)
        }
        console.log(stock)
      }
  return (props.trigger) ? (
    <div className='CreateStock'>
        <div className='CreateStock-inner'>
            <p>Create a stock</p>
            <form onSubmit={handleSubmit}>
                <input
                    type='number'
                    placeholder='Cafe ID'
                    name='cafe_c_id'
                    onChange={handleChange}
                    required />
                <input
                    type='number'
                    placeholder='Product ID'
                    name='product_p_id'
                    onChange={handleChange}
                    required />
                <button>Create</button>
            </form>
            <button className='CreateStock-button' onClick={() => props.setTrigger(false)}>X</button> {/* closes modal */}
        </div>
    </div>
  ) : "";
}

export default CreateStock