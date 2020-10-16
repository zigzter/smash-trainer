import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { IRoutine } from '../../types';
import { selectRoutine } from '../Selection/selectionSlice';

interface IProps {
    routine: IRoutine;
}

const RoutinePreview: FC<IProps> = ({ routine }: IProps) => {
    const dispatch = useDispatch();
    return (
        <div
            onClick={() => dispatch(selectRoutine(routine.id))}
            style={{ cursor: 'pointer', borderRadius: 4, border: '1px solid black', padding: 5, margin: 5 }}
        >
            {routine.name}
        </div>
    );
};

export default RoutinePreview;
