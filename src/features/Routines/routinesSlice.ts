import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMovePayload, IRoutinePayload, IRoutinesState } from '../../types';

const initialState: IRoutinesState = {
    routines: {},
};

const routinesSlice = createSlice({
    name: 'routines',
    initialState,
    reducers: {
        routineCreated(state, action: PayloadAction<IRoutinePayload>) {
            const { character, name } = action.payload;
            if (!state.routines[character]) {
                state.routines[character] = { [name]: [] };
            }
        },
        movesAdded(state, action: PayloadAction<IMovePayload>) {
            const { character, moves, routine } = action.payload;
            state.routines[character]![routine].push(moves);
        },
    },
});

export const { routineCreated, movesAdded } = routinesSlice.actions;

export default routinesSlice;
