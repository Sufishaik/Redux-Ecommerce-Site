import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from './ProductComponent';
import axios from "axios";
import { Setproducts } from '../ReduxFiles/Actions';
function ProductListing() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const fetchProduct = async() => {
    const resp = await axios.get('https://fakestoreapi.com/products')
    dispatch({type : 'SETPRODUCTS', payload : resp.data});
  }
  useEffect(() => {
    fetchProduct()
  }, [])
 
  console.log(products)
  return (
    <>
     
       <ProductComponent/>
    </>
  )
}

export default ProductListing
