import { configureStore } from '@reduxjs/toolkit';
import characterReducer from '../reducers/character';

const store = configureStore({
    reducer: characterReducer,
});

export type AppDispatch = typeof store.dispatch;

export default store;
