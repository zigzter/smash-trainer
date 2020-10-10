import { configureStore } from '@reduxjs/toolkit';
import characterReducer from '../reducers/character';
import movesReducer from '../reducers/moves';

const store = configureStore({
    reducer: {
        characterReducer,
        movesReducer,
    },
});

export type AppDispatch = typeof store.dispatch;

export default store;
