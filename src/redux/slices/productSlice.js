import { createSlice } from '@reduxjs/toolkit'


export const productSlice = createSlice({
    name: 'products',
    initialState:{
      products:[]
    },
    reducers: {
      setProducts:(state,action)=>{
        state.products = [...action.payload.products] 
      } 
    },
  })
  
 
  

  export const { setProducts,getSingleProduct } = productSlice.actions
  
  export default productSlice.reducer