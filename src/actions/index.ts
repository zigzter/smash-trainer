import { createAction } from '@reduxjs/toolkit';

export const characterSelected = createAction<string>('CHARACTER_SELECTED');
