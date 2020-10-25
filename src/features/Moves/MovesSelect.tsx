import { Button } from '@material-ui/core';
import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';

import { attacks, directions, moves, modifiers } from '../../constants/moves';
import { IMove } from '../../types';
import { moveChainCollectionAdded } from '../Routines/routinesSlice';

const options = [...attacks, ...directions, ...moves, ...modifiers].map((move) => {
    return {
        label: move,
        value: move,
    };
});

interface IProps {
    routineId: string;
}

const MovesSelect: FC<IProps> = ({ routineId }: IProps) => {
    const [moves, setMoves] = useState<string[]>([]);
    const [moveChains, setMoveChains] = useState<IMove[][]>([]);
    const dispatch = useDispatch();
    const onChange = (value: any) => {
        setMoves(value.map((move: { value: string }) => move.value));
    };
    const addMoveChain = () => {
        // dispatch(moveChainCollectionAdded({ moves, routineId }));
        setMoves([]);
    };
    const addMoveChainCollection = () => {
        dispatch(moveChainCollectionAdded({ moveChainCollection: moveChains, routineId }));
        setMoves([]);
    };
    return (
        <>
            <Select isMulti options={options} onChange={onChange} />
            <Button variant="outlined" color="primary" onClick={addMoveChain}>
                Add Move
            </Button>
            <Button variant="outlined" color="primary" onClick={addMoveChainCollection}>
                Add New
            </Button>
        </>
    );
};

export default MovesSelect;
