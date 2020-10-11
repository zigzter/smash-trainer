import { roster } from '../constants/roster';

type Characters = typeof roster;
export type TCharacter = Characters[number];

export interface IMovePayload {
    character: TCharacter;
    routine: string;
    moves: string[];
}

export interface IRoutinePayload {
    name: string;
}

export interface IRoutinesState {
    [routineName: string]: string[][];
}
