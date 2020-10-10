import { createReducer } from '@reduxjs/toolkit';
import { movesAdded, routineCreated } from '../actions';
import { IRoutineState } from '../types';

const defaultState: IRoutineState = {
    routines: {},
};

const routinesReducer = createReducer(defaultState, (builder) => {
    builder.addCase(routineCreated, (state, action) => {
        const { character, name } = action.payload;
        if (!state.routines[character]) {
            state.routines[character] = { [name]: [] };
        }
    })
    builder.addCase(movesAdded, (state, action) => {
        const { character, moves, routine } = action.payload;
        state.routines[character]![routine].push(moves);
    });
});

export default routinesReducer;
