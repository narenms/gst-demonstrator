import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import itemReducer from '../components/GSTDemonstrator/itemSlice';

export default configureStore({
  reducer: {
    item: itemReducer,
  },
});