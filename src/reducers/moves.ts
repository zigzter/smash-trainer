import { createReducer } from '@reduxjs/toolkit';
import { movesAdded } from '../actions';
import { IMovesState } from '../types';

const defaultState: IMovesState = {
    moves: {},
};

const characterReducer = createReducer(defaultState, (builder) => {
    builder.addCase(movesAdded, (state, action) => {
        const { character, moves } = action.payload;
        const existingMoves = state.moves[character] || [];
        state.moves[character] = [...existingMoves, ...moves];
    });
});

export default characterReducer;
