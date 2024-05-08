import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    item_count: 0,
    total_price: 0,
  },
  reducers: {
    addUpdateItem: (state, action) => {
      let itemIndex = state.items.findIndex(
        (item) => item.id == action.payload.product.id
      );

      if (action.payload.type == "MAIN") {
        if (itemIndex > -1) {
            state.items[itemIndex].count += action.payload.product.count;
        } else {
          state.items.push(action.payload.product);
        }
      } else {
        if (itemIndex !== -1 && action.payload.type == "ADD") {
          state.items[itemIndex].count += 1;
        } else if (itemIndex > -1 && action.payload.type == "SUB") {
          state.items[itemIndex].count -= 1;
          if (state.items[itemIndex].count <= 0) {
            state.items = state.items.filter(
              (newitem) => newitem.id != action.payload.product.id
            );
          }
        } else if (action.payload.type == "REM") {
          state.items = state.items.filter((newitem) => {
            if (newitem.id == action.payload.product.id) {
              state.item_count -= newitem.count;
              return;
            }
            return newitem;
          });
        } else {
          state.items.push(action.payload.product);
        }
      }

      const totalItemCount = state.items.reduce((acc, item) => {
        return item.count + acc;
      }, 0);
      state.item_count = totalItemCount;

      const totalPrice = state.items.reduce((accumulator, currentProduct) => {
        let productTotalPrice = currentProduct.count * currentProduct.price;
        return accumulator + productTotalPrice;
      }, 0);
      state.total_price = totalPrice.toFixed(2);
    },
  },
});

export const { addUpdateItem } = cartSlice.actions;

export default cartSlice.reducer;
