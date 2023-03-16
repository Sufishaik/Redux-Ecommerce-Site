import React from "react";
import Header from "./Components/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductListing from "./Components/ProductListing";
import ProductDetails from "./Components/ProductDetails";
// import ProductComponent from "./Components/ProductComponent";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
      <Routes>
        <Route path="/" element={<ProductListing/>}/>
        <Route path="/productdetails/:id" element={<ProductDetails/>}/>
        {/* <Route path="/productcomponent" element={<ProductComponent/>}/> */}
        <Route>404 Not Found!</Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
