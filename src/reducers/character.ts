import { createReducer } from '@reduxjs/toolkit';
import { characterSelected } from '../components/actions';

const characterReducer = createReducer({}, (builder) => {
    builder.addCase(characterSelected, (state, action) => {
        console.log(action);
    });
});

export default characterReducer;
