import React from "react";
import Review from "./Review";
import { useDispatch } from "react-redux";
import { addUpdateItem } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

function CartItem({ product }) {
  const dispatch = useDispatch();

  const handleAddUpdate = (e, action) => {
    e.preventDefault();

    if (action == "ADD") {
      dispatch(
        addUpdateItem({
          product: {
            ...product,
          },
          type: "ADD",
        })
      );
    } else if (action == "SUB") {
      dispatch(
        addUpdateItem({
          product: {
            ...product,
          },
          type: "SUB",
        })
      );
    } else {
      dispatch(
        addUpdateItem({
          product: {
            ...product,
          },
          type: "REM",
        })
      );
    }
  };
  return (
    <div className="single-cart-item p-4">
      <li className="flex py-6 sm:py-6 ">
        <div className="flex-shrink-0">
          <img
            src={product.image}
            className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
          />
        </div>
        <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
          <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
            <div>
              <div className="flex flex-col">
                <div className="-mb-2 -mt-2">
                  <Review
                    rate={product.rating.rate}
                    count={product.rating.count}
                    color="!text-black"
                  />
                </div>
                <Link to={`/shopping-app-redux/product/${product.id}`} className="text-md font-semibold font-heading capitalize">
                  {product.title}
                </Link>
              </div>

              <div className="mt-1 flex items-end">
                <p className="text-sm font-medium text-gray-900">
                  {product.count} x {product.price} = Rs.{" "}
                  {product.price * product.count}
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
      <div className="mb-2 flex">
        <div className="min-w-24 flex">
          <button
            type="button"
            className="h-7 w-7"
            onClick={(e) => handleAddUpdate(e, "SUB")}
          >
            -
          </button>
          <div className="mx-1 h-7 w-9 rounded-md border text-center">
            {product.count}
          </div>

          <button
            type="button"
            className="flex h-7 w-7 items-center justify-center"
            onClick={(e) => handleAddUpdate(e, "ADD")}
          >
            +
          </button>
        </div>
        <div className="ml-6 flex text-sm">
          <button
            type="button"
            className="flex items-center space-x-1 px-2 py-1 pl-0"
            onClick={(e) => handleAddUpdate(e, "REM")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-red-500"
            >
              <path d="M3 6h18"></path>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            </svg>
            <span className="text-xs font-medium text-red-500">Remove</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
