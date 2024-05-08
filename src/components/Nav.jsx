import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Nav() {

  const item_count = useSelector(state => state.cart.item_count)
  return (
    <div className="relative w-full bg-orange-700">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 sm:px-6 lg:px-8">
        <div className="block">
          <ul className="inline-flex space-x-8">
            <li>
              <NavLink 
                to="/shopping-app-redux/"
                className="text-md font-normal text-white hover:text-gray-900 font-body ease-linear"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shopping-app-redux/shop"
                className="text-md font-normal text-white hover:text-gray-900 font-body ease-linear"
              >
                Shop
              </NavLink>
            </li> 
            <li>
              <NavLink
                to="/shopping-app-redux/cart"
                className="text-md font-normal text-white hover:text-gray-900 font-body ease-linear relative"
              >
                Cart 
                {item_count!=0 ? <span className="absolute -top-1 -right-3 rounded-full px-1 bg-black text-white text-[10px]">{item_count}</span>:''}
                
              </NavLink>
            </li> 
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
