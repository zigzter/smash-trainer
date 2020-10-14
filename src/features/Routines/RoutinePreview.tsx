import React, { FC } from 'react';
import { IRoutine } from '../../types';

interface IProps {
    routine: IRoutine;
    selectRoutine(): void;
}

const RoutinePreview: FC<IProps> = ({ routine, selectRoutine }: IProps) => {
    return (
        <div
            onClick={selectRoutine}
            style={{ cursor: 'pointer', borderRadius: 4, border: '1px solid black', padding: 5, margin: 5 }}
        >
            {routine.name}
        </div>
    );
};

export default RoutinePreview;
