import { roster } from '../constants/roster';

type Characters = typeof roster;
type Character = Characters[number];

export interface IMovePayload {
    character: Character;
    routine: string;
    moves: string[];
}

export interface IRoutinePayload {
    character: Character;
    name: string;
}

export interface IRoutineState {
    routines: {
        [character in Character]?: {
            [routineName: string]: string[][];
        };
    };
}
