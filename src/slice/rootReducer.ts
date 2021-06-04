import { combineReducers } from '@reduxjs/toolkit';
import { Action } from 'redux';
import { RootState } from '../types';
import ExampleSliceReducer from './ExampleSlice';

const appReducer = combineReducers({
  example: ExampleSliceReducer,
});

const rootReducer = (state: RootState | undefined, action: Action) =>
  appReducer(state, action);

export default rootReducer;
