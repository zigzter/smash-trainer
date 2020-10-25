import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { IMoveChainCollectionPayload, IRoutinePayload, IRoutine, IMoveChain, IMove } from '../../types';

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
                    moveChainCollections: [],
                },
            }),
        },
        routineDeleted: (state, action: PayloadAction<string>) => {
            return state.filter((routine) => routine.id !== action.payload);
        },
        moveChainCollectionAdded: {
            reducer: (state, action: PayloadAction<IMoveChainCollectionPayload>) => {
                console.log(action.payload);
                const { routineId, id, moveChainCollection } = action.payload;
                const routine = state.find((routine) => routine.id === routineId);
                if (routine) {
                    routine.moveChainCollections.push({ id, moveChainCollection });
                }
            },
            prepare: (payload: { routineId: string; moveChainCollection: IMove[][] }) => {
                const moveChainsWithIDs = payload.moveChainCollection.map((moves) => ({
                    moves,
                    id: nanoid(),
                }));
                return {
                    payload: {
                        ...payload,
                        moveChainCollection: moveChainsWithIDs,
                        id: nanoid(),
                        createdAt: new Date().toString(),
                    },
                };
            },
        },
    },
});

export const { routineCreated, moveChainCollectionAdded, routineDeleted } = routinesSlice.actions;

export default routinesSlice;
