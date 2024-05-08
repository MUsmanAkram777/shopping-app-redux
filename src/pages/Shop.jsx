import React, { useEffect, useState } from "react";
import { ProductList } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/slices/productSlice";
import { Link } from "react-router-dom";

function Shop() {
  const [loading, setLoding] = useState(true);
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.products.products);

  const fetchProducts = async () => {
    if(productsState.length === 0 ){
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      if (products?.length > 0) {
        dispatch(setProducts({ products: products }));
        setLoding(false);
      }
    }else{
      setLoding(false);
    }
  };

  const getCats = () =>{
    const uniqueCats = [];
    productsState.map(product => {
        if (uniqueCats.indexOf(product.category) === -1) {
          uniqueCats.push(product.category)
        }
    });
    return uniqueCats
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="px-5 pt-10">
      <div className="text-center pb-12">
        <h1 className="max-w-xl mx-auto  font-heading text-4xl mb-5 text-center text-white capitalize">
          SHOP ALL
        </h1>
        <div className="h-1 bg-orange-700 max-w-36 m-auto rounded"></div>
      </div>

      <div className="flex gap-3 flex-wrap justify-center">
        {productsState &&
          getCats().map((category,index) => (
            <Link
              to={`/shopping-app-redux/category/${category}`}
              className="px-4 py-1 text-black bg-white rounded-full capitalize text-sm hover:bg-black hover:text-white"
              key={index}
            >
              {category}
            </Link>
          ))}
      </div>

      <ProductList showHeading={false} loading={loading} products={productsState} />
    </div>
  );
}

export default Shop;
