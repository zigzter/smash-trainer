import { roster } from '../constants/roster';

type Characters = typeof roster;
type Character = Characters[number];

export interface IMovePayload {
    character: Character;
    moves: string[];
}

export interface IMovesState {
    moves: {
        [character in Character]?: string[];
    };
}
