import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import store from './store';

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export interface RootState {
  example: ExampleState;
}

export interface ExampleState {
  id: number;
}

export type ButtonVariants = 'primary' | 'secondary';
