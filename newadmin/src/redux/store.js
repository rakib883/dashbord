import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice'; // Import the reducer correctly

export default configureStore({
  reducer: {
    allData: counterReducer, // Use the reducer property from counterSlice
  },
});