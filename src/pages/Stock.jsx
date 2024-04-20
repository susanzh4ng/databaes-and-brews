import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreateStock from '../components/CreateStock';
import EditStock from '../components/EditStock';

const Stock = () => {
  const[stocks, setStocks] = useState([]);
  const[createStock, setCreateStock] = useState(false);
  const[editStock, setEditStock] = useState(false);
  const[editId, setEditId] = useState();
  const url = 'http://localhost:8800/sold_in/'; //backend route

  useEffect(() => {
    const fetchAllStocks = async () => {
      try {
        const res = await axios.get(url) //api call from backend
        setStocks(res.data); //updating frontend Stock page with DB data
      } catch (err) {
        console.log(err)
      }
    }
    fetchAllStocks() //calling api call
  }, [])

  const handleDelete = async (id) => {
    try {
      await axios.delete(url+id) //api call from backend
      alert("Stock has been deleted!");
      window.location.reload(); 
    } catch (err) {
      console.log(err)
    }
  }

  const handleEdit = async (id) => {
    setEditStock(true)
    setEditId(id)
  }

  return (
    <div className='Stock'>
      <main className='stock-content'>
        <button onClick={() => setCreateStock(true)}>Create Stock</button>
        {stocks.map(stock => (
           <div className="stocks" key={stock.supply_id}>
            <p>Stock ID: {stock.supply_id}</p>
            <p>Cafe ID: {stock.cafe_c_id}</p>
            <p>Product ID: {stock.product_p_id}</p>
            <button onClick={() => handleEdit(stock.supply_id)}>Edit Cafe</button>
            <button className='stock-deleteButton' onClick={() => handleDelete(stock.supply_id)}>Delete</button>
          </div>
        ))}
      </main>
      <CreateStock trigger={createStock} setTrigger={setCreateStock} />
      <EditStock supply_id={editId} trigger={editStock} setTrigger={setEditStock} />
    </div>
  )
}

export default Stock