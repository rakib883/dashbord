import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Use localStorage as default storage
import counterReducer from './slice';
import { combineReducers } from 'redux';

// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
};

// Combine reducers (if you have more in the future)
const rootReducer = combineReducers({
  allData: counterReducer,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with the persisted reducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for redux-persist
    }),
});

// Create the persistor
export const persistor = persistStore(store);

export default store;
