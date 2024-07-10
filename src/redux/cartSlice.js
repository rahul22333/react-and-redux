import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems:[]
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart : (state , action) => {
      const cartItem = state.cartItems
      const existingItemIndex = cartItem.findIndex((item)=>item.id === action.payload.id) 
      if(existingItemIndex !== -1){
       cartItem[existingItemIndex].quantity += 1
      }else{
        cartItem.push({...action.payload , quantity : 1})
      }
    },
    removeFromCart: (state , action) => {
      const cartItem = state.cartItems
      const existingItemIndex = cartItem.findIndex((item)=>item.id === action.payload.id) 
      cartItem.splice(existingItemIndex,1)
    },
  },
})
export const { addToCart , removeFromCart , incrementByAmount } = cartSlice.actions

export default cartSlice.reducer