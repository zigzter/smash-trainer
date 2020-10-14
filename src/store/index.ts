import { configureStore, combineReducers } from '@reduxjs/toolkit';
import rosterReducer from '../features/Roster/rosterSlice';
import routinesReducer from '../features/Routines/routinesSlice';

const preloadedState = localStorage.getItem('appState')
    ? JSON.parse(localStorage.getItem('appState') as string)
    : {
          roster: {
              characterSelected: '',
          },
          routines: [],
      };

const rootReducer = combineReducers({
    roster: rosterReducer.reducer,
    routines: routinesReducer.reducer,
});

const store = configureStore({
    reducer: rootReducer,
    preloadedState,
});

store.subscribe(() => {
    localStorage.setItem('appState', JSON.stringify(store.getState()));
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;

export default store;
