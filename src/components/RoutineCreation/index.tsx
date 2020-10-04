import React, { useState } from 'react';
import MovesSelect from './MovesSelect';

const RoutineCreation = () => {
    const [moveChains, setMoveChains] = useState<Array<string[]>>([]);
    const onClick = (moves: string[]) => {
        setMoveChains([...moveChains, moves]);
    };
    return (
        <>
            {moveChains.map((moves) => {
                return (
                    <ul>
                        {moves.map((move) => (
                            <li>{move}</li>
                        ))}
                    </ul>
                );
            })}
            <MovesSelect onClick={onClick} />
        </>
    );
};

export default RoutineCreation;
