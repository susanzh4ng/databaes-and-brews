import React, { useState } from 'react';
import axios from 'axios';

const EditWorker = (props) => {
    const [worker, setWorker] = useState({
        email: "",
        address: ""
      })
      const url = 'http://localhost:8800/assignment6/'; //backend route
    
      const handleChange = (e) => {
        setWorker(prevWorker => ({...prevWorker, [e.target.name]: e.target.value})); //updating worker element with input's value
      }
    
      const handleSubmit = async e => {
        e.preventDefault()
        try {
          await axios.put(url+props.id, worker) //calling from backend
          alert("Worker has been updated!");
          window.location.reload(); //automatically refreshes page
        } catch (err) {
            console.log(err)
        }
        console.log(worker)
      }
  return (props.trigger) ? (
    <div className='EditWorker'>
        <div className='EditWorker-inner'>
            <p>Edit Worker #{props.id}</p>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Email'
                    name='email'
                    onChange={handleChange} />
                <input
                    type='text'
                    placeholder='Address'
                    name='address'
                    onChange={handleChange} />
                <button>Edit</button>
            </form>
            <button className='EditWorker-button' onClick={() => props.setTrigger(false)}>X</button> {/* closes modal */}
        </div>
    </div>
  ) : "";
}

export default EditWorker