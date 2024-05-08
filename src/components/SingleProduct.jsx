import React from "react";
import { Link } from "react-router-dom";
import Review from "./Review";
import { Bounce, toast } from "react-toastify";
import { addUpdateItem } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

function SingleProduct({ product }) {

const dispatch = useDispatch()

  const handleAddToCart = (e) => {
    e.preventDefault();
    

    dispatch(addUpdateItem(
      {
        product:{
          ...product,
          count:1,
        },
        type:'ADD'
      }
    ))




    const addToCart = <div className="font-body text-[10px] uppercase">
      Added to Cart.
      <Link className="pl-1 underline " to={'/shopping-app-redux/cart'}>View Cart</Link>
    </div>

    toast.success(addToCart, {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <div className="main-single-product-card">
      <div className="rounded-md border">
        <Link to={`/shopping-app-redux/product/${product.id}`}>
          <img
            src={product.image}
            className="aspect-[16/9] w-full rounded md:aspect-auto md:h-[300px] lg:h-[200px] p-4 bg-white object-contain"
          />
        </Link>
        <div className="p-4">
          <Review rate={product.rating.rate} count={product.rating.count} />
          <Link
            to={`/shopping-app-redux/product/${product.id}`}
            className=" text-white text-lg font-heading tracking-widest "
          >
            {product.title.slice(0, 20)}...
          </Link>
          <p className="mt-3 text-sm text-white">Rs. {product.price}</p>
          <div className="mt-4">
            <Link
              to={`/shopping-app-redux/category/${product.category}`}
              className="capitalize mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900"
            >
              {product.category}
            </Link>
          </div>
          {/* <div className="mt-3 flex items-center space-x-2">
            <span className="block text-sm text-white font-semibold">Colors : </span>
            <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-red-400"></span>
            <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-purple-400"></span>
            <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-orange-400"></span>
          </div>
          <div className="mt-5 flex items-center space-x-2">
            <span className="block text-sm font-semibold text-white">Size : </span>
            <span className="block cursor-pointer rounded-md border text-white border-gray-300 p-1 px-2 text-xs font-medium">
              8 UK
            </span>
            <span className="block cursor-pointer rounded-md border text-white border-gray-300 p-1 px-2 text-xs font-medium">
              9 UK
            </span>
            <span className="block cursor-pointer rounded-md border text-white border-gray-300 p-1 px-2 text-xs font-medium">
              10 UK
            </span>
          </div> */}
          <button
            type="button"
            className="btn-primary !max-w-[100%] w-full"
            onClick={(e) => handleAddToCart(e)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
