import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreateEmployee from '../components/CreateEmployee';
import EditEmployee from '../components/EditEmployee';

const Employee = () => {
  const[employees, setEmployees] = useState([]);
  const[createEmployee, setCreateEmployee] = useState(false);
  const[editEmployee, setEditEmployee] = useState(false);
  const[editId, setEditId] = useState();
  const url = 'http://localhost:8800/employee/'; //backend route

  useEffect(() => {
    const fetchAllEmployees = async () => {
      try {
        const res = await axios.get(url) //api call from backend
        setEmployees(res.data); //updating frontend Employee page with DB data
      } catch (err) {
        alert(err)
      }
    }
    fetchAllEmployees() //calling api call
  }, [])

  const handleDelete = async (id) => {
    try {
      await axios.delete(url+id) //api call from backend
      alert("Employee has been deleted!");
      window.location.reload(); 
    } catch (err) {
      alert(err)
    }
  }

  const handleEdit = async (id) => {
    setEditEmployee(true)
    setEditId(id)
  }

  return (
    <div className='Employee'>
      <main className='employee-content'>
        <button onClick={() => setCreateEmployee(true)}>Create Employee</button>
        {employees.map(employee => (
           <div className="employees" key={employee.e_id}>
            <p>Employee ID: {employee.e_id}</p>
            <p>Name: {employee.f_name} {employee.l_name}</p>
            <p>Works at Cafe #{employee.location_id}</p>
            <p>Position: {employee.position}</p>
            {employee.salary && <p>Salary: {employee.salary}</p>}
            {employee.phone_number && <p>Phone number: {employee.phone_number}</p>}
            <button onClick={() => handleEdit(employee.e_id)}>Edit Employee</button>
            <button className='employee-deleteButton' onClick={() => handleDelete(employee.e_id)}>Delete</button>
          </div>
        ))}
      </main>
      <CreateEmployee trigger={createEmployee} setTrigger={setCreateEmployee} />
      <EditEmployee e_id={editId} trigger={editEmployee} setTrigger={setEditEmployee} />
    </div>
  )
}

export default Employee