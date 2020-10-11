import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMovePayload, IRoutinePayload, IRoutinesState } from '../../types';

const initialState: IRoutinesState = {};

const routinesSlice = createSlice({
    name: 'routines',
    initialState,
    reducers: {
        routineCreated(state, action: PayloadAction<IRoutinePayload>) {
            const { name } = action.payload;
            if (!state[name]) {
                state[name] = [];
            }
        },
        movesAdded(state, action: PayloadAction<IMovePayload>) {
            const { moves, routine } = action.payload;
            state[routine].push(moves);
        },
    },
});

export const { routineCreated, movesAdded } = routinesSlice.actions;

export default routinesSlice;
