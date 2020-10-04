import { createReducer } from '@reduxjs/toolkit';
import { characterSelected } from '../actions';

const characterReducer = createReducer({ characterSelected: '' }, (builder) => {
    builder.addCase(characterSelected, (state, action) => {
        state.characterSelected = action.payload;
    });
});

export default characterReducer;
