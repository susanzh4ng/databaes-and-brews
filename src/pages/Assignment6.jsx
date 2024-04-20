import React, { useState } from 'react';
import axios from 'axios';
import EditWorker from '../components/EditWorker';

const Assignment6 = () => {
    const[editWorker, setEditWorker] = useState(false);
    const[editId, setEditId] = useState();
    const [user, setUser] = useState({  //setting up state for the user
        f_name: "",
        l_name: "",
        id: null
      });

    const[workers, setWorkers] = useState([]);

    const handleChange = (e) => {
        setUser(prevUser => ({...prevUser, [e.target.name]: e.target.value})); //updating User element with input's value
      }
  
    async function handleSubmit(e) {
        e.preventDefault()
        console.log(user)
    
        const url = 'http://localhost:8800/assignment6/'; //backend route
    
        await axios //post request has to be completed before the get request can occur
          .post(url, user)
          .catch(function (error) {
            console.log(error);
            alert("Error posting user due to "+error+"! Please try again!");
          });
    
        axios
          .get(url)
          .then(function (response) {
            setWorkers(response.data); //updates workers state with server's data
          })
          .catch(function (error) {
            console.log(error);
            if (error.response && error.response.data && error.response.data.message) {
              setWorkers(error.response.data.message); //setting as server's error message
            };
          })
      };

    const handleEdit = async (id) => {
        setEditWorker(true)
        setEditId(id)
    }

  return (
    <div className='Assignment6'>
      <main className='worker-content'>
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
                    placeholder='Employee ID'
                    name='id'
                    onChange={handleChange} />
                <button>Submit</button>
            </form>
        {workers.map(worker => (
           <div className="workers" key={worker.email}>
            <p>Employee ID: {worker.id}</p>
            <p>Name: {worker.f_name} {worker.l_name}</p>
            <p>Salary: {worker.salary}</p>
            <p>Email: {worker.email}</p>
            <p>Address: {worker.address}</p>
            <button onClick={() => handleEdit(worker.id)}>Edit Worker</button>
          </div>
        ))}
        
      </main>
      
      <EditWorker id={editId} trigger={editWorker} setTrigger={setEditWorker} />
    </div>
  )
}

export default Assignment6