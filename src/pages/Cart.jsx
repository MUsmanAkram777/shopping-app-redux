import React from "react";
import { useSelector } from "react-redux";
import { CartItem } from "../components";

function Cart() {
  const cart_items = useSelector((state) => state.cart.items);
  const total_price = useSelector((state) => state.cart.total_price);

  if (!cart_items.length) {
    return (
      <div className="mx-auto max-w-7xl px-2">
        <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
          <div className="text-center">
            <h1 className="max-w-xl mx-auto  font-heading text-4xl mb-5 text-center text-white uppercase">
              YOUR CART is empty
            </h1>
            <div className="h-1 bg-orange-700 max-w-36 m-auto rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-2">
      <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
        <div className="text-center">
          <h1 className="max-w-xl mx-auto  font-heading text-4xl mb-5 text-center text-white capitalize">
            YOUR CART
          </h1>
          <div className="h-1 bg-orange-700 max-w-36 m-auto rounded"></div>
        </div>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-4 xl:gap-x-4">
          <section
            aria-labelledby="cart-heading"
            className="rounded-lg bg-white lg:col-span-8"
          >
            <ul role="list" className="divide-y divide-gray-200">
              {cart_items.length > 0 &&
                cart_items.map((item) => (
                  <CartItem key={item.id} product={item} />
                ))}
            </ul>
          </section>

          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
          >
            <h2
              id="summary-heading"
              className=" border-b border-gray-200 px-4 py-3 text-lg font-bold font-heading capitalize text-gray-900 sm:p-4"
            >
              Price Details
            </h2>
            <div>
              <dl className=" space-y-1 px-2 py-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-800">Price (3 item)</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    Rs. {total_price}
                  </dd>
                </div> 
                <div className="flex items-center justify-between py-4">
                  <dt className="flex text-sm text-gray-800">
                    <span>Delivery Charges</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700">Free</dd>
                </div>
                <div className="flex items-center justify-between border-y border-dashed py-4 ">
                  <dt className="text-base font-medium text-gray-900">
                    Total Amount
                  </dt>
                  <dd className="text-base font-medium text-gray-900">
                    Rs. {total_price}
                  </dd>
                </div>
              </dl>
              {/* <div className="px-2 pb-4 font-medium text-green-700">
                You will save ₹ 3,431 on this order
              </div> */}
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}

export default Cart;
