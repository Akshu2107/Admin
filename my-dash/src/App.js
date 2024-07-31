import React, { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./components/pages/Dashboard";
import Sidebardash from "./components/shared/Sidebar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from "./components/shared/Navbar";
import ProductPage from "./components/pages/ProductPage";
import Profile from "./components/accountpages/Profile";
import Signin from "./components/accountpages/Signin";
import SignUp from "./components/accountpages/Signup";
import Allusers from "./components/accountpages/Alluser";
import Order from "./components/pages/Order";


function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <BrowserRouter>

      <div className="App">

        <NavBar toggleSidebar={toggleSidebar}></NavBar>

        <div className="d-flex" style={{ display: 'flex' }}>

          <Sidebardash sidebarOpen={sidebarOpen} ></Sidebardash>

          <div className="maindash mainBlock" >

            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/order" element={<Order></Order>} />
              <Route path="/user" element={<Allusers></Allusers>} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/singin" element={<Signin />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>

          </div>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
