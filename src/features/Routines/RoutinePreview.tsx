import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IRoutine } from '../../types';
import { selectRoutine } from '../Selection/selectionSlice';

interface IProps {
    routine: IRoutine;
}

const RoutinePreview: FC<IProps> = ({ routine }: IProps) => {
    const dispatch = useDispatch();
    return (
        <Link to={`/routine/${routine.id}`}>
            <div
                onClick={() => dispatch(selectRoutine(routine.id))}
                style={{ cursor: 'pointer', borderRadius: 4, border: '1px solid black', padding: 5, margin: 5 }}
            >
                {routine.name}
            </div>
        </Link>
    );
};

export default RoutinePreview;
