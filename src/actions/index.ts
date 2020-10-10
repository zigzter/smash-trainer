import { createAction } from '@reduxjs/toolkit';
import { IMovePayload } from '../types';

export const characterSelected = createAction<string>('CHARACTER_SELECTED');
export const movesAdded = createAction<IMovePayload>('MOVES_ADDED');
