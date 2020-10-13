import React, { FC } from 'react';
import { IRoutine } from '../../types';

interface IProps {
    routine: IRoutine;
}

const RoutineView: FC<IProps> = ({ routine }: IProps) => {
    return (
        <div>
            <h1>{routine.name}</h1>
        </div>
    );
};

export default RoutineView;
