import React, { useState } from 'react';
import axios from 'axios';

const EditCafe = (props) => {
    const [cafe, setCafe] = useState({
        address: "",
        manager: null,
        revenue: null
      })
      const url = 'http://localhost:8800/cafe/'; //backend route
    
      const handleChange = (e) => {
        setCafe(prevCafe => ({...prevCafe, [e.target.name]: e.target.value})); //updating cafe element with input's value
      }
    
      const handleSubmit = async e => {
        e.preventDefault()
        try {
          await axios.put(url+props.cafe_id, cafe) //calling from backend
          alert("Cafe has been updated!");
          window.location.reload(); //automatically refreshes page
        } catch (err) {
            console.log(err)
        }
        console.log(cafe)
      }
  return (props.trigger) ? (
    <div className='EditCafe'>
        <div className='EditCafe-inner'>
            <p>Edit Cafe #{props.cafe_id}</p>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Address'
                    name='address'
                    onChange={handleChange} />
                <input
                    type='number'
                    placeholder='Manager ID'
                    name='manager'
                    onChange={handleChange} />
                <input
                    type='number'
                    placeholder='Revenue'
                    name='revenue'
                    onChange={handleChange} />
                <button>Edit</button>
            </form>
            <button className='EditCafe-button' onClick={() => props.setTrigger(false)}>X</button> {/* closes modal */}
        </div>
    </div>
  ) : "";
}

export default EditCafe