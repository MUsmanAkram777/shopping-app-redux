import { createSlice } from '@reduxjs/toolkit'


export const categorySlice = createSlice({
    name: 'category',
    initialState:{
        products:[]
    },
    reducers: {
      setCategoryProducts:(state,action)=>{
        console.log(action.payload.products)
        state.products = [...action.payload.products] 
      } 
    },
  })
  
 
  

  export const { setCategoryProducts } = categorySlice.actions
  
  export default categorySlice.reducer