import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Cafe from "./pages/Cafe";
import Customer from "./pages/Customer";
import Employee from "./pages/Employee";
import Orders from "./pages/Orders";
import Product from "./pages/Product";
import Stock from "./pages/Stock";
import Assignment6 from "./pages/Assignment6";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
        <Routes>
          
          <Route path="/" element={<Home/>} />
          <Route path="/cafe" element={<Cafe/>} />
          <Route path="/customer" element={<Customer/>} />
          <Route path="/employee" element={<Employee/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/stock" element={<Stock/>} />
          <Route path="/assignment6" element={<Assignment6/>} />
        </Routes>
      <div className='top-blur'></div>
      <div className='bottom-blur'></div>  
      </BrowserRouter>
    </div>
  );
}

export default App;
