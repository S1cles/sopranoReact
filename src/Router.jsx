import React from "react";
import {BrowserRouter,Routes,Route, useLocation, Navigate} from 'react-router-dom'
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Product from './Pages/Product';
import Layout from "./Components/Layout";
import NF from './Pages/NF';

const Router = () => {
    const location = useLocation();
  return (
    <div>
      {location.pathname !== "/" && <Layout />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="*" element={<NF />} />
        </Routes>
    </div>
  );
};

export default Router;
