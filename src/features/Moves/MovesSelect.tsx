import { Button } from '@material-ui/core';
import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import Select, { ValueType } from 'react-select';

import { moveOptions } from '../../constants/moves';
import { IMove, TMoveOptions } from '../../types';
import { moveChainCollectionAdded } from '../Routines/routinesSlice';

const selectStyles = {
    menu: (provided: any) => ({
        ...provided,
        backgroundColor: '#212121',
    }),
    option: (provided: any, { isFocused }: any) => ({
        ...provided,
        backgroundColor: isFocused ? '#424242' : 'transparent',
    }),
};

interface IProps {
    routineId: string;
}

const MovesSelect: FC<IProps> = ({ routineId }: IProps) => {
    const [moveChain, setMoveChain] = useState<IMove[]>([]);
    const [moveChains, setMoveChains] = useState<IMove[][]>([]);
    const dispatch = useDispatch();

    const onChange = (value: ValueType<TMoveOptions>) => {
        if (value) {
            setMoveChain(value.map((move: any) => ({ name: move.value })));
        }
    };

    const addMoveChain = () => {
        setMoveChains((prevChains) => [...prevChains, moveChain]);
    };

    const addMoveChainCollection = () => {
        dispatch(moveChainCollectionAdded({ moveChainCollection: moveChains, routineId }));
    };

    return (
        <>
            <h3>New string:</h3>
            {moveChains.map((chain) => chain.map((move) => <p>{move.name}</p>))}
            <Select isMulti styles={selectStyles} options={moveOptions} onChange={onChange} />
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
