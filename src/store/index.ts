import { configureStore } from '@reduxjs/toolkit';
import characterReducer from '../reducers/character';
import routinesReducer from '../reducers/routines';

const store = configureStore({
    reducer: {
        characterReducer,
        routinesReducer,
    },
});

export type AppDispatch = typeof store.dispatch;

export default store;
