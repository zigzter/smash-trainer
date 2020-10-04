import React, { FC, useState } from 'react';
import Select from 'react-select';
import { attacks, directions, moves, modifiers } from '../../../constants/moves';

const options = [...attacks, ...directions, ...moves, ...modifiers].map((move) => {
    return {
        label: move,
        value: move,
    };
});

interface Props {
    onClick(moves: string[]): void;
}

const MovesSelect: FC<Props> = ({ onClick }) => {
    const [moves, setMoves] = useState<string[]>([]);
    const onChange = (value: any) => {
        setMoves(value.map((move: { value: string }) => move.value));
    };
    const onSubmit = () => {
        onClick(moves);
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
