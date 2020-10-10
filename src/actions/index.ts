import { createAction } from '@reduxjs/toolkit';
import { IMovePayload, IRoutinePayload } from '../types';

export const characterSelected = createAction<string>('CHARACTER_SELECTED');
export const routineCreated = createAction<IRoutinePayload>('ROUTINE_CREATED');
export const movesAdded = createAction<IMovePayload>('MOVES_ADDED');
