import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreateCafe from '../components/CreateCafe';
import EditCafe from '../components/EditCafe';

const Cafe = () => {
  const[cafes, setCafes] = useState([]);
  const[createCafe, setCreateCafe] = useState(false);
  const[editCafe, setEditCafe] = useState(false);
  const[editId, setEditId] = useState();
  const url = 'http://localhost:8800/cafe/'; //backend route

  useEffect(() => {
    const fetchAllCafes = async () => {
      try {
        const res = await axios.get(url) //api call from backend
        setCafes(res.data); //updating frontend Cafe page with DB data
      } catch (err) {
        console.log(err)
      }
    }
    fetchAllCafes() //calling api call
  }, [])

  const handleDelete = async (id) => {
    try {
      await axios.delete(url+id) //api call from backend
      alert("Cafe has been deleted!");
      window.location.reload(); 
    } catch (err) {
      console.log(err)
    }
  }

  const handleEdit = async (id) => {
    setEditCafe(true)
    setEditId(id)
  }

  return (
    <div className='Cafe'>
      <main className='cafe-content'>
        <button onClick={() => setCreateCafe(true)}>Create Cafe</button>
        {cafes.map(cafe => (
           <div className="cafes" key={cafe.cafe_id}>
            <p>Cafe ID: {cafe.cafe_id}</p>
            <p>Location: {cafe.address}</p>
            {cafe.manager && <p>Manager ID: {cafe.manager}</p>}
            {cafe.revenue && <p>Total Revenue: ${cafe.revenue}</p>}
            <button onClick={() => handleEdit(cafe.cafe_id)}>Edit Cafe</button>
            <button className='cafe-deleteButton' onClick={() => handleDelete(cafe.cafe_id)}>Delete</button>
          </div>
        ))}
      </main>
      <CreateCafe trigger={createCafe} setTrigger={setCreateCafe} />
      <EditCafe cafe_id={editId} trigger={editCafe} setTrigger={setEditCafe} />
    </div>
  )
}

export default Cafe