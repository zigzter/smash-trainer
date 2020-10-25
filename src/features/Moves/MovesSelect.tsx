import { Button } from '@material-ui/core';
import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';

import { moveOptions } from '../../constants/moves';
import { IMove } from '../../types';
import { moveChainCollectionAdded } from '../Routines/routinesSlice';

interface IProps {
    routineId: string;
}

const MovesSelect: FC<IProps> = ({ routineId }: IProps) => {
    const [moveChain, setMoveChain] = useState<IMove[]>([]);
    const [moveChains, setMoveChains] = useState<IMove[][]>([]);
    const dispatch = useDispatch();

    const onChange = (value: any) => {
        setMoveChain(value.map((move: any) => ({ name: move.value, type: move.type })));
    };

    const addMoveChain = () => {
        setMoveChains((prevChains) => [...prevChains, moveChain]);
    };

    const addMoveChainCollection = () => {
        dispatch(moveChainCollectionAdded({ moveChainCollection: moveChains, routineId }));
    };

    return (
        <>
            <Select isMulti options={moveOptions} onChange={onChange} />
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
