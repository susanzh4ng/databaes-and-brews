import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreateProduct from '../components/CreateProduct';
import EditProduct from '../components/EditProduct';

const Product = () => {
  const[products, setProducts] = useState([]);
  const[createProduct, setCreateProduct] = useState(false);
  const[editProduct, setEditProduct] = useState(false);
  const[editId, setEditId] = useState();
  const url = 'http://localhost:8800/product/'; //backend route

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get(url) //api call from backend
        setProducts(res.data); //updating frontend Product page with DB data
      } catch (err) {
        alert(err)
      }
    }
    fetchAllProducts() //calling api call
  }, [])

  const handleDelete = async (id) => {
    try {
      await axios.delete(url+id) //api call from backend
      alert("Product has been deleted!");
      window.location.reload(); 
    } catch (err) {
      alert(err)
    }
  }

  const handleEdit = async (id) => {
    setEditProduct(true)
    setEditId(id)
  }

  return (
    <div className='Product'>
      <main className='product-content'>
        <button onClick={() => setCreateProduct(true)}>Create Product</button>
        {products.map(product => (
           <div className="products" key={product.p_id}>
            <p>Product ID: {product.p_id}</p>
            <p>Name: {product.name} </p>
            <p>Price: ${product.price}</p>
            {product.recipe && <p>Recipe: {product.recipe}</p>}
            <button onClick={() => handleEdit(product.p_id)}>Edit Product</button>
            <button className='product-deleteButton' onClick={() => handleDelete(product.p_id)}>Delete</button>
          </div>
        ))}
      </main>
      <CreateProduct trigger={createProduct} setTrigger={setCreateProduct} />
      <EditProduct p_id={editId} trigger={editProduct} setTrigger={setEditProduct} />
    </div>
  )
}

export default Product