import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@material-ui/core';

import { IRoutine } from '../../types';
import { selectRoutine } from '../Selection/selectionSlice';

interface IProps {
    routine: IRoutine;
}

const RoutinePreview: FC<IProps> = ({ routine }: IProps) => {
    const dispatch = useDispatch();
    return (
        <Link to={`/routine/${routine.id}`}>
            <Card onClick={() => dispatch(selectRoutine(routine.id))}>
                <CardContent>{routine.name}</CardContent>
            </Card>
        </Link>
    );
};

export default RoutinePreview;
