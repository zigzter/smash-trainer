import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';

import { attacks, directions, moves, modifiers } from '../../constants/moves';
import { movesAdded } from './routinesSlice';

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
    const dispatch = useDispatch();
    const onChange = (value: any) => {
        setMoves(value.map((move: { value: string }) => move.value));
    };
    const onSubmit = () => {
        dispatch(movesAdded({ moves, routineId }));
        setMoves([]);
    };
    return (
        <>
            <Select isMulti options={options} onChange={onChange} />
            <button onClick={onSubmit}>Add Moveset</button>
        </>
    );
};

export default MovesSelect;
