import { configureStore, combineReducers } from '@reduxjs/toolkit';
import rosterReducer from '../features/Roster/rosterSlice';
import routinesReducer from '../features/Routines/routinesSlice';

const rootReducer = combineReducers({
    roster: rosterReducer.reducer,
    routines: routinesReducer.reducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;

export default store;
