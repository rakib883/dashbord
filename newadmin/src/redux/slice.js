import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    token: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    removeToken:(state,action)=>{
        state.token = null
    }
   
  },
});

// ✅ Correct destructuring
export const { setToken,removeToken} = counterSlice.actions;

export default counterSlice.reducer;
