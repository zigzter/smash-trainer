import React, { FC } from 'react';
import { Card, CardContent } from '@material-ui/core';

import { IRoutine } from '../../types';

interface IProps {
    routine: IRoutine;
    onClick: () => void;
}

const RoutinePreview: FC<IProps> = ({ routine, onClick }: IProps) => {
    return (
        <Card onClick={onClick}>
            <CardContent>{routine.name}</CardContent>
        </Card>
    );
};

export default RoutinePreview;
