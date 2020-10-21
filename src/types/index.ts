import { roster } from '../constants/roster';

type Characters = typeof roster;
export type TCharacter = Characters[number];

export interface IMovePayload {
    routineId: string;
    moves: string[];
    id: string;
    createdAt: string;
}

export interface IRoutinePayload {
    name: string;
    id: string;
    createdAt: string;
    moveChainCollections: IMoveChainCollection[];
}

export interface IMoveChain {
    id: string;
    moves: string[];
}

export interface IMoveChainCollection {
    id: string;
    moveChainCollection: IMoveChain[];
}

export interface IRoutine {
    name: string;
    id: string;
    moveChainCollections: IMoveChainCollection[];
}
