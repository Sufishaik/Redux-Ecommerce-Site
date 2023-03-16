import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
        <Link to="/" className="navbar-brand ml-5">
          <h1>Fake Shop</h1>
        </Link>
      </nav>
    </>
  );
}

export default Header;
