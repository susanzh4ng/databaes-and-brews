import React, { useState } from 'react';
import axios from 'axios';

const CreateOrders = (props) => {
    const [orders, setOrders] = useState({
        product_p_id: null,
        customer_c_id: null,
        employee_e_id: null
      })
    
      const handleChange = (e) => {
        setOrders(prevOrders => ({...prevOrders, [e.target.name]: e.target.value})); //updating Orders element with input's value
      }
    
      const handleSubmit = async e => {
        e.preventDefault()
        try {
          await axios.post('http://localhost:8800/orders', orders) //calling from backend
          alert("Order has been created!");
          window.location.reload(); //automatically refreshes page
        } catch (err) {
            alert(err)
        }
        console.log(orders)
      }
  return (props.trigger) ? (
    <div className='CreateOrders'>
        <div className='CreateOrders-inner'>
            <p>Create an order</p>
            <form onSubmit={handleSubmit}>
                <input
                    type='number'
                    placeholder='Product ID'
                    name='product_p_id'
                    onChange={handleChange}
                    required />
                <input
                    type='number'
                    placeholder='Customer ID'
                    name='customer_c_id'
                    onChange={handleChange}
                    required />
                <input
                    type='number'
                    placeholder='Employee ID'
                    name='employee_e_id'
                    onChange={handleChange} />
                <button>Create</button>
            </form>
            <button className='CreateOrders-button' onClick={() => props.setTrigger(false)}>X</button> {/* closes modal */}
        </div>
    </div>
  ) : "";
}

export default CreateOrders