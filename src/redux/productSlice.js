import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  productItem:{}
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchedItem : (state , action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.productItem = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { fetchedItem , } = productSlice.actions

export default productSlice.reducer