import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="text-center py-28">
      <h1 className="max-w-xl mx-auto  font-heading text-4xl mb-5 text-center text-white uppercase">
        Unbeatable Deals Await – Elevate Your Shopping Experience Today!
      </h1>
      <div className="h-1 bg-orange-700 max-w-36 m-auto rounded"></div>
      <Link to="/shopping-app-redux/shop"
        type="button"
        className="btn-primary"
      >
        SHOP
      </Link>
    </div>
  );
}

export default Welcome;
