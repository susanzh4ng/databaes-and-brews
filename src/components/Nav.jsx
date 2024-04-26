import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className='Nav'>
        <ul className='nav-list'>
            <li className="nav-item">
                <Link to="/cafe">Cafes</Link>
            </li>
            <li className="nav-item">
                <Link to="/customer">Customers</Link>
            </li>
            <li className="nav-item">
                <Link to="/employee">Employees</Link>
            </li>
            <li className="nav-item">
                <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/orders">Orders</Link>
            </li>
            <li className="nav-item">
                <Link to="/product">Products</Link>
            </li>
            <li className="nav-item">
                <Link to="/stock">Stock</Link>
            </li>
            <li className="nav-item">
                <Link to="/assignment6">Assignment 6</Link>
            </li>
        </ul>
    </div>
  )
}

export default Nav