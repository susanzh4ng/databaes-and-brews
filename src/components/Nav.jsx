import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className='Nav'>
        <ul>
            <li>
                <Link to="/cafe">Cafes</Link>
            </li>
            <li>
                <Link to="/customer">Customers</Link>
            </li>
            <li>
                <Link to="/employee">Employees</Link>
            </li>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/orders">Orders</Link>
            </li>
            <li>
                <Link to="/product">Products</Link>
            </li>
            <li>
                <Link to="/stock">Stock</Link>
            </li>
            <li>
                <Link to="/assignment6">Assignment 6</Link>
            </li>
        </ul>
    </div>
  )
}

export default Nav