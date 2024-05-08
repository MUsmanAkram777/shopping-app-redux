import React, { useEffect, useState } from "react";
import { Welcome,ProductList } from '../components'
import { useDispatch, useSelector } from "react-redux";  
import { setProducts } from "../redux/slices/productSlice";

function Home() {
  const [loading, setLoding] = useState(true);
  const dispatch = useDispatch()
  const productsState = useSelector(state=>state.products.products)

  const fetchProducts = async () =>{
    if(productsState.length === 0 ){
      const response  = await fetch('https://fakestoreapi.com/products')
      const products = await response.json();
      if(products?.length > 0){
        dispatch(setProducts({products:products}))
        setLoding(false)
      }
    }else{
      setLoding(false)
    }
  }


  useEffect(() => {
    fetchProducts()
  }, [])
  return (
    <div className='px-5'>
        <Welcome/>
        <ProductList loading={loading} products={productsState} />
    </div>
  )
}

export default Home