import React, { useState } from 'react';
import axios from 'axios';

const CreateCafe = (props) => {
    const [cafe, setCafe] = useState({
        address: "",
        manager: null,
        revenue: null
      })
    
      const handleChange = (e) => {
        setCafe(prevCafe => ({...prevCafe, [e.target.name]: e.target.value})); //updating cafe element with input's value
      }
    
      const handleSubmit = async e => {
        e.preventDefault()
        try {
          await axios.post('http://localhost:8800/cafe', cafe) //calling from backend
          alert("Cafe has been created!");
          window.location.reload(); //automatically refreshes page
        } catch (err) {
            console.log(err)
        }
        console.log(cafe)
      }
  return (props.trigger) ? (
    <div className='CreateCafe'>
        <div className='CreateCafe-inner'>
            <p>Create a cafe</p>
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
                <button>Create</button>
            </form>
            <button className='CreateCafe-button' onClick={() => props.setTrigger(false)}>X</button> {/* closes modal */}
        </div>
    </div>
  ) : "";
}

export default CreateCafe