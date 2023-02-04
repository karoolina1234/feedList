import { configureStore } from '@reduxjs/toolkit'
import { slice } from './items'

export const store =  configureStore({
  reducer:{
    item: slice.reducer,
   
  }
})
