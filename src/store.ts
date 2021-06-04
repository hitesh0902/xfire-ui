import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slice/rootReducer';

export default configureStore({
  reducer: rootReducer,
});
