import { roster } from '../constants/roster';

type Characters = typeof roster;
export type TCharacter = Characters[number];

export interface IMovePayload {
    character: TCharacter;
    routine: string;
    moves: string[];
}

export interface IRoutinePayload {
    character: TCharacter;
    name: string;
}

export interface IRoutinesState {
    routines: {
        [character in TCharacter]?: {
            [routineName: string]: string[][];
        };
    };
}
