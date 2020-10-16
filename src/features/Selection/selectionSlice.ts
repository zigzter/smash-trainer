import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { routineCreated, routineDeleted } from '../Routines/routinesSlice';

const initialState = {
    character: '',
    routine: '',
};

const selectionSlice = createSlice({
    name: 'selection',
    initialState,
    reducers: {
        selectRoutine: (state, action: PayloadAction<string>) => {
            state.routine = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(routineCreated, (state, action) => {
                state.routine = action.payload.id;
            })
            .addCase(routineDeleted, (state) => {
                state.routine = '';
            });
    },
});

export const { selectRoutine } = selectionSlice.actions;

export default selectionSlice;
