import React, { FC, useState } from 'react';
import MovesSelect from './MovesSelect';

const RoutineCreation: FC = () => {
    const [moveChains, setMoveChains] = useState<string[][]>([]);
    const onClick = (moves: string[]) => {
        setMoveChains([...moveChains, moves]);
    };
    return (
        <>
            {moveChains.map((moves) => (
                <p key={moves[0]}>{moves.join(', ')}</p>
            ))}
            <MovesSelect onClick={onClick} />
        </>
    );
};

export default RoutineCreation;
