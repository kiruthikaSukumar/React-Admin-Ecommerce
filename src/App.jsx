import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "../Layout";
import Product from "../Product";
import Orders from "../Orders";
import Category from "../Category";
import Customers from "./Customers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/Customers" element={<Customers />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
