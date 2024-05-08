import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Review } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { Bounce, toast } from "react-toastify";
import { addUpdateItem } from "../redux/slices/cartSlice";

function MainProduct() {
  const { pId } = useParams();
  const [product, setProduct] = useState(null);
  const [loding, setLoding] = useState(true);
  const [atcCount,setAtcCount] = useState(1)

  const cart_items = useSelector(state=>state.cart.items)
  const dispatch = useDispatch()

  const addToCart = <div className="font-body text-[10px] uppercase">
    Added to Cart.
    <Link className="pl-1 underline " to={'/shopping-app-redux/cart'}>View Cart</Link>
  </div>
  const handleMainAtc = (e) => {
    e.preventDefault();

    dispatch(addUpdateItem(
      {
        product:{
          ...product,
          count:atcCount,
        },
        type:'MAIN'
      }
    ))

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
  }

  const fetchSingleProduct = async (id) => {
    
    let item = cart_items?.find(item=> item.id == id)
    if(cart_items.length > 0 && item){
      setProduct({...item});
      setAtcCount(item.count ? item.count : 1)
      setLoding(false);
    }else{
      const repsonse = await fetch(`https://fakestoreapi.com/products/${id}`);
      const product = await repsonse.json();
      if (product) {
        setProduct(product);
        setLoding(false);
      }
    }
  };

  useEffect(() => {
    fetchSingleProduct(pId);
  }, [pId]);

  if (loding)
    return <div className="text-4xl text-center text-white">Loading...</div>;
  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 py-24">
        <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
          <img
            alt="Nike Air Max 21A"
            className=" w-full rounded object-contain p-5 bg-white lg:h-96 lg:w-1/2"
            src={product.image}
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h2 className="text-sm font-semibold tracking-widest text-orange-700 capitalize">
              {product.category}
            </h2>
            <h1 className="my-4 text-3xl font-semibold text-white">
              {product.title}
            </h1>

            <Review rate={product.rating.rate} count={product.rating.count} />

            {/* <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
              <div className="flex items-center">
                <span className="mr-3 text-sm font-semibold">Color</span>
                <button className="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none"></button>
                <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none"></button>
                <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-green-200 focus:outline-none"></button>
              </div>
              <div className="ml-auto flex items-center">
                <span className="mr-3 text-sm font-semibold">Size</span>
                <div className="relative">
                  <select className="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-black focus:outline-none focus:ring-2 focus:ring-black">
                    <option>8 UK</option>
                    <option>9 UK</option>
                    <option>10 UK</option>
                  </select>
                  <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-chevron-down"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </div>
              </div>
            </div> */}
            <div className="flex justify-between items-center">
              <p className="leading-relaxed text-white">Rs. {product.price}</p>
              <div className="flex items-center justify-between ">
                <span className="title-font text-xl font-bold text-gray-900">
                  Rs. {product.price}
                </span>
                <div className="flex items-center">
                  <div className="min-w-24 flex">
                    <button
                      type="button"
                      className="h-7 w-7 text-white"
                      onClick={(e) => {
                        setAtcCount(prev=>{
                          if(prev==1){
                            return 1
                          }else{
                            return prev - 1
                          }
                        })
                      }}
                      
                    >
                      -
                    </button>
                    <div className="flex justify-center items-center mx-1 h-7 w-9 rounded-md border border-white text-center text-white bg-transparent text-[12px]">
                      {atcCount}
                    </div>
                    <button
                      type="button"
                      className="flex h-7 w-7 items-center justify-center text-white"
                      onClick={(e) => {
                        setAtcCount(prev=>prev+1)
                      }}
                    >
                      +
                    </button>
                  </div> 
                </div>
                <button
                  type="button"
                  className="btn-primary !justify-end !mx-0 !mt-0"
                  onClick={(e)=>handleMainAtc(e)}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="border-t-2 border-gray-100 mt-5 pt-8">
              <h2 className="font-heading text-2xl text-white pb-3">
                Description
              </h2>
              <p className="leading-relaxed text-white">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainProduct;
