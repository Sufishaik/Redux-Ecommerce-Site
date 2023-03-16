import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import "./StyleDetail.css";
function ProductDetails() {
  const { id } = useParams();
  const products = useSelector((state) => state.products);
  const currentProduct = products.find((item) => item.id === parseInt(id));
  const {title,price,image, category,description} = currentProduct;
  // const dispatch = useDispatch();

  useEffect(() => {}, []);
  return (
    <div className="container">
      {currentProduct ? (
        <>
          <div className="card nw" style={{ width: "18rem" }} key={id}>
            <div className="card-cont">
                  <img src={image} className="card-img-top img" alt="..." />
            </div>
                </div>
                  <div className="card-body body">
                    <h2 className="card-title">{title}</h2>
                    <h4 className="card-text price">$ {price}</h4>
                    <h6 className="card-text category">{category}</h6>
                    <p className="card-text desc">{description}</p>
                    <a href="#" className="btn btn-primary">
                      Add to card
                    </a>
                  </div>
        </>
      ) : (
        <h1 className="display-3 my-5 text-center">
          StudentContact with id {id} is not exists
        </h1>
      )}
    </div>
  );
}

export default ProductDetails;
