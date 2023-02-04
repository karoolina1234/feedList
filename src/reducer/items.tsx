import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'items',
    initialState:[],
    reducers: {
      addItems(state, action):any {        
        return [action.payload]
      },
    
    
      removeOne(state,action):any{
        return [action.payload, 2]
      },
    
   
    }
    
  })
  
  export const { addItems ,removeOne} = slice.actions
  

  
  export default slice.reducer