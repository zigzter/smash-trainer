import { createSlice } from '@reduxjs/toolkit';
import { TCharacter } from '../../types';

const initialState = {
    characterSelected: '' as TCharacter,
};

const rosterSlice = createSlice({
    name: 'roster',
    initialState,
    reducers: {
        characterSelected(state, action) {
            state.characterSelected = action.payload;
        },
    },
});

export const { characterSelected } = rosterSlice.actions;

export default rosterSlice;
