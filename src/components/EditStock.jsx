import React, { useState } from 'react';
import axios from 'axios';

const EditStock = (props) => {
    const [stock, setStock] = useState({
        cafe_c_id: null,
        product_p_id: null
      })
      const url = 'http://localhost:8800/sold_in/'; //backend route
    
      const handleChange = (e) => {
        setStock(prevStock => ({...prevStock, [e.target.name]: e.target.value})); //updating Stock element with input's value
      }
    
      const handleSubmit = async e => {
        e.preventDefault()
        try {
          await axios.put(url+props.supply_id, stock) //calling from backend
          alert("Stock has been updated!");
          window.location.reload(); //automatically refreshes page
        } catch (err) {
            alert(err)
        }
        console.log(stock)
      }
  return (props.trigger) ? (
    <div className='EditStock'>
        <div className='EditStock-inner'>
            <p>Edit Stock #{props.supply_id}</p>
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
                <button>Edit</button>
            </form>
            <button className='EditStock-button' onClick={() => props.setTrigger(false)}>X</button> {/* closes modal */}
        </div>
    </div>
  ) : "";
}

export default EditStock