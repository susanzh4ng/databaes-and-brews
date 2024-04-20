import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreateCustomer from '../components/CreateCustomer';
import EditCustomer from '../components/EditCustomer';

const Customer = () => {

  const[customers, setCustomers] = useState([]);
  const[createCustomer, setCreateCustomer] = useState(false);
  const[editCustomer, setEditCustomer] = useState(false);
  const[editId, setEditId] = useState();
  const url = 'http://localhost:8800/customer/'; //backend route


  useEffect(() => {
    const fetchAllCustomers = async () => {
      try {
        const res = await axios.get(url) //api call from backend
        setCustomers(res.data); //updating frontend Cafe page with DB data
      } catch (err) {
        console.log(err)
      }
    }
    fetchAllCustomers() //calling api call
  }, [])


  const handleDelete = async (id) => {
    try {
      await axios.delete(url+id) //api call from backend
      alert("Customer has been deleted!");
      window.location.reload();
    } catch (err) {
      console.log(err)
    }
  }


  const handleEdit = async (id) => {
    setEditCustomer(true)
    setEditId(id)
  }


  return (
    <div className='Customer'>
      <main className='customer-content'>
        <button onClick={() => setCreateCustomer(true)}>Create Customer</button>
        {customers.map(customer => (
           <div className="customers" key={customer.c_id}>
            <p>Customer ID: {customer.c_id}</p>
            <p>Name: {customer.f_name} {customer.l_name}</p>
            {customer.email && <p>Email: {customer.email}</p>}
            {customer.loyalty_points && <p>Loyalty Points: {customer.loyalty_points}</p>}
            <button onClick={() => handleEdit(customer.c_id)}>Edit Customer</button>
            <button className='customer-deleteButton' onClick={() => handleDelete(customer.c_id)}>Delete</button>
          </div>
        ))}
      </main>
      <CreateCustomer trigger={createCustomer} setTrigger={setCreateCustomer} />
      <EditCustomer c_id={editId} trigger={editCustomer} setTrigger={setEditCustomer} />
    </div>
  )
}

export default Customer