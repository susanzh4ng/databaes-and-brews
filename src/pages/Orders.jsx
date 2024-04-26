import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreateOrders from '../components/CreateOrders';
import EditOrders from '../components/EditOrders';

const Orders = () => {
  const[orders, setOrders] = useState([]);
  const[createOrders, setCreateOrders] = useState(false);
  const[editOrders, setEditOrders] = useState(false);
  const[editId, setEditId] = useState();
  const url = 'http://localhost:8800/orders/'; //backend route

  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        const res = await axios.get(url) //api call from backend
        setOrders(res.data); //updating frontend Orders page with DB data
      } catch (err) {
        alert(err)
      }
    }
    fetchAllOrders() //calling api call
  }, [])

  const handleDelete = async (id) => {
    try {
      await axios.delete(url+id) //api call from backend
      alert("Order has been deleted!");
      window.location.reload(); 
    } catch (err) {
      alert(err)
    }
  }

  const handleEdit = async (id) => {
    setEditOrders(true)
    setEditId(id)
  }

  return (
    <div className='Orders'>
      <main className='orders-content'>
        <button onClick={() => setCreateOrders(true)}>Create Order</button>
        {orders.map(order => (
           <div className="orders-array" key={order.o_number}>
            <p>Order ID: {order.o_number}</p>
            <p>Product ID: {order.product_p_id}</p>
            <p>Customer ID: {order.customer_c_id}</p>
            <p>Employee ID: {order.employee_e_id}</p>
            <button onClick={() => handleEdit(order.o_number)}>Edit Order</button>
            <button className='order-deleteButton' onClick={() => handleDelete(order.o_number)}>Delete</button>
          </div>
        ))}
      </main>
      <CreateOrders trigger={createOrders} setTrigger={setCreateOrders} />
      <EditOrders o_number={editId} trigger={editOrders} setTrigger={setEditOrders} />
    </div>
  )
}

export default Orders