import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";


function ProductList({ showHeading = true,loading,products }) {
  

  if(loading) return <div className="text-4xl mt-5 text-center text-white">Loading...</div>

  if(!products.length) return <div className="text-4xl mt-5 text-center text-white">Nothing to show...</div>

  return (
    <div className="className productlist mx-auto grid w-full max-w-7xl">
      {showHeading && (
        <>
          <h2 className="font-heading text-3xl mb-2 text-white uppercase text-center">Trending</h2>
          <div className="h-1 bg-orange-700 max-w-11 rounded mx-auto w-full"></div>
        </>
      )}

      <div className="grid w-full items-center space-y-4 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {products.map(product => (
         <SingleProduct key={product.id} product={product}/>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
