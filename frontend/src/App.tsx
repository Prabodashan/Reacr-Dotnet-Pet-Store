import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import AddProduct from "./pages/addProduct/AddProduct";
import DeleteProduct from "./pages/deleteProduct/DeleteProduct";
import EditProduct from "./pages/editProduct/EditProduct";
import HomePage from "./pages/home/Home";
import Products from "./pages/products/Products";

const App: React.FC = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Wrapper */}
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products">
            <Route index element={<Products />} />
            <Route path="add" element={<AddProduct />} />
            <Route path="edit/:id" element={<EditProduct />} />
            <Route path="delete/:id" element={<DeleteProduct />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
