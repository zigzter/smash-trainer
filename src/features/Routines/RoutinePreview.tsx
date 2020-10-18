import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@material-ui/core';

import { IRoutine } from '../../types';

interface IProps {
    routine: IRoutine;
    onClick: () => void;
}

const RoutinePreview: FC<IProps> = ({ routine, onClick }: IProps) => {
    return (
        <Link to={`/routine/${routine.id}`}>
            <Card onClick={onClick}>
                <CardContent>{routine.name}</CardContent>
            </Card>
        </Link>
    );
};

export default RoutinePreview;
