import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Style.css";
function ProductComponent() {
  const products = useSelector((state) => state.products);
  const render = products.map((item) => {
    const { id, title, image, price, category } = item;
    return (
      <Link to={`/productdetails/${id}`}>
      <div className="container" >
        <div className="card" style={{ width: "18rem" }} key={id}>
          <img src={image} className="card-img-top" alt="..." />
            <h2 className="card-title title">{title.slice(0,10)}...</h2>
          <div className="card-body">
            <h5 className="card-text price">Price : {price}</h5>
            <p className="category"> Category : {category}</p>
           
          </div>
        </div>
      </div>
      </Link>
    );
  });
  return <>{render}</>;
}

export default ProductComponent;
