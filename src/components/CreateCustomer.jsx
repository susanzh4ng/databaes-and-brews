import React, { useState } from 'react';
import axios from 'axios';

const CreateCustomer = (props) => {
    const [customer, setCustomer] = useState({
        f_name: "",
        l_name: "",
        loyalty_points: null,
        email: ""
      })
    
      const handleChange = (e) => {
        setCustomer(prevCustomer => ({...prevCustomer, [e.target.name]: e.target.value})); //updating customer element with input's value
      }
    
      const handleSubmit = async e => {
        e.preventDefault()
        try {
          await axios.post('http://localhost:8800/customer', customer) //calling from backend
          alert("Customer has been created!");
          window.location.reload(); //automatically refreshes page
        } catch (err) {
            console.log(err)
        }
        console.log(customer)
      }
  return (props.trigger) ? (
    <div className='CreateCustomer'>
        <div className='CreateCustomer-inner'>
            <p>Create a customer</p>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='First name'
                    name='f_name'
                    onChange={handleChange} />
                <input
                    type='text'
                    placeholder='Last name'
                    name='l_name'
                    onChange={handleChange} />
                <input
                    type='number'
                    placeholder='Loyalty points'
                    name='loyalty_points'
                    onChange={handleChange} />
                <input
                    type='text'
                    placeholder='Email'
                    name='email'
                    onChange={handleChange} />
                <button>Create</button>
            </form>
            <button className='CreateCustomer-button' onClick={() => props.setTrigger(false)}>X</button> {/* closes modal */}
        </div>
    </div>
  ) : "";
}

export default CreateCustomer