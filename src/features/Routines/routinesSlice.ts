import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { IMovePayload, IRoutinePayload, IRoutine } from '../../types';

const initialState: IRoutine[] = [];

const routinesSlice = createSlice({
    name: 'routines',
    initialState,
    reducers: {
        routineCreated: {
            reducer: (state, action: PayloadAction<IRoutinePayload>) => {
                state.push(action.payload);
            },
            prepare: (name: string) => ({
                payload: {
                    name,
                    id: nanoid(),
                    createdAt: new Date().toString(),
                    moveChains: [],
                },
            }),
        },
        movesAdded: {
            reducer: (state, action: PayloadAction<IMovePayload>) => {
                console.log(action.payload);
                const { routineId } = action.payload;
                const routine = state.find((routine) => routine.id === routineId);
                if (routine) {
                    routine.moveChains.push(action.payload);
                }
            },
            prepare: (payload: IMovePayload) => ({
                payload: {
                    ...payload,
                    id: nanoid(),
                    createdAt: new Date().toString(),
                },
            }),
        },
    },
});

export const { routineCreated, movesAdded } = routinesSlice.actions;

export default routinesSlice;
