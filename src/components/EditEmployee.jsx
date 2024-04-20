import React, { useState } from 'react';
import axios from 'axios';

const EditEmployee = (props) => {
    const [employee, setEmployee] = useState({
        phone_number: null,
        f_name: "",
        l_name: "",
        position: "",
        location_id: null,
        salary: null
      })
      const url = 'http://localhost:8800/employee/'; //backend route
    
      const handleChange = (e) => {
        setEmployee(prevEmployee => ({...prevEmployee, [e.target.name]: e.target.value})); //updating employee element with input's value
      }
    
      const handleSubmit = async e => {
        e.preventDefault()
        try {
          await axios.put(url+props.e_id, employee) //calling from backend
          alert("Employee has been updated!");
          window.location.reload(); //automatically refreshes page
        } catch (err) {
            console.log(err)
        }
        console.log(employee)
      }
  return (props.trigger) ? (
    <div className='EditEmployee'>
        <div className='EditEmployee-inner'>
            <p>Edit Employee #{props.e_id}</p>
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
                    placeholder='Cafe ID'
                    name='location_id'
                    onChange={handleChange} />
                <input
                    type='text'
                    placeholder='Position'
                    name='position'
                    onChange={handleChange} />
                <input
                    type='number'
                    placeholder='Salary'
                    name='salary'
                    onChange={handleChange} />
                <input
                    type='number'
                    placeholder='Phone number'
                    name='phone_number'
                    onChange={handleChange} />
                <button>Edit</button>
            </form>
            <button className='EditEmployee-button' onClick={() => props.setTrigger(false)}>X</button> {/* closes modal */}
        </div>
    </div>
  ) : "";
}

export default EditEmployee