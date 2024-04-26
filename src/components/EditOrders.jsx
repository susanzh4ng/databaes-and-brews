import React, { useState } from 'react';
import axios from 'axios';

const EditOrders = (props) => {
    const [orders, setOrders] = useState({
        product_p_id: null,
        customer_c_id: null,
        employee_e_id: null
      })
      const url = 'http://localhost:8800/orders/'; //backend route
    
      const handleChange = (e) => {
        setOrders(prevOrders => ({...prevOrders, [e.target.name]: e.target.value})); //updating Orders element with input's value
      }
    
      const handleSubmit = async e => {
        e.preventDefault()
        try {
          await axios.put(url+props.o_number, orders) //calling from backend
          alert("Order has been updated!");
          window.location.reload(); //automatically refreshes page
        } catch (err) {
            alert(err)
        }
        console.log(orders)
      }
  return (props.trigger) ? (
    <div className='EditOrders'>
        <div className='EditOrders-inner'>
            <p>Edit Order #{props.o_number}</p>
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
                <button>Edit</button>
            </form>
            <button className='EditOrders-button' onClick={() => props.setTrigger(false)}>X</button> {/* closes modal */}
        </div>
    </div>
  ) : "";
}

export default EditOrders