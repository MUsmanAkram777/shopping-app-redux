import React, { useEffect, useState } from "react";
import { ProductList } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/slices/productSlice";

function Shop() {
  const [loading, setLoding] = useState(true);
  const [selectedCats,setSelectedCats] = useState([])
  const dispatch = useDispatch();
  let productsState = useSelector((state) => state.products.products);
  let filterProducts = []

  if(selectedCats.length > 0 ){
    filterProducts = productsState.filter(product => selectedCats.includes(product.category))
  }else{
    filterProducts = [...productsState]
  }

  // settings products
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

  // function to extact categories from products array
  const getCats = () =>{
    const uniqueCats = [];
    productsState.map(product => {
        if (uniqueCats.indexOf(product.category) === -1) {
          uniqueCats.push(product.category)
        }
    });
    return uniqueCats
  }


  console.log(selectedCats)

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
            <label
              // to={`/shopping-app-redux/category/${category}`}
              className={
                selectedCats.includes(category) ? "px-4 cursor-pointer py-1 rounded-full capitalize text-smbg-black text-white bg-black" :
                "px-4 cursor-pointer py-1 text-black bg-white rounded-full capitalize text-sm hover:bg-black hover:text-white"
              }
              key={index}
              htmlFor={category}
            >
              <input type="checkbox" id={category} name="category[]" value={category} className=" hidden" checked={selectedCats.includes(category)} onChange={(e)=>setSelectedCats(prev => {
                if(selectedCats.includes(category)) return prev.filter(cat=>cat !== category)
                else return [...prev,category]
              })}/>
              {category}
            </label>
          ))}
      </div>

      <ProductList showHeading={false} loading={loading} products={filterProducts} />
    </div>
  );
}

export default Shop;
