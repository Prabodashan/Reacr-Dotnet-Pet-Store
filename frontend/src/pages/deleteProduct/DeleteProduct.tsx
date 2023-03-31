import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import { TextField, Button } from "@mui/material";

import "./deleteProduct.scss";

import { IProduct } from "../../types/global";
import { baseUrl } from "../../constants/url";

const DeleteProduct = () => {
  const redirect = useNavigate();
  const { id } = useParams();

  const handleDeleteBtnClick = () => {
    axios
      .delete(`${baseUrl}/${id}`)
      .then((resposne) =>
        redirect("/products", {
          state: { message: "Product Deleted Successfully" },
        })
      )
      .catch((error) => alert("Error"));
  };

  const handleBackBtnClick = () => {
    redirect("/products");
  };

  return (
    <div className="delete-product">
      <h2>Delete Product</h2>
      <h4>Are You Sure You want to delete this product?</h4>

      <div>
        <Button variant="outlined" color="error" onClick={handleDeleteBtnClick}>
          Yes Delete It
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleBackBtnClick}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default DeleteProduct;
