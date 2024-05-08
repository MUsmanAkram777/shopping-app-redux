import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { setCategoryProducts } from "../redux/slices/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { ProductList } from "../components";

function MainCategory() {
  const { slug } = useParams();
  const [loading, setLoding] = useState(true);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.categoryProducts.products);

  const fetchCategoryProducts = async (slug) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${slug}`
    );
    const cat_products = await response.json();
    if (cat_products) {
      dispatch(setCategoryProducts({ products: cat_products }));
      setLoding(false);
    }
  };

  useEffect(() => {
    fetchCategoryProducts(slug);
  }, [slug]);

  return (
    <div className="px-5">
      <div className="text-center py-12">
        <h1 className="max-w-xl mx-auto  font-heading text-4xl mb-5 text-center text-white uppercase">
          {slug}
        </h1>
        <div className="h-1 bg-orange-700 max-w-36 m-auto rounded"></div>
      </div>
      <ProductList showHeading={false} loading={loading} products={products} />
    </div>
  );
}

export default MainCategory;
