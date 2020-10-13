import { createSelector } from '@reduxjs/toolkit';
import React, { FC, useState } from 'react';
import { connect } from 'react-redux';

import RoutineCreation from './features/Routines/RoutineCreation';
import RoutineView from './features/Routines/RoutineView';
import { AppState } from './store';
import { IRoutine } from './types';

const selectRoutines = (state: AppState) => state.routines;
const getRoutines = createSelector(selectRoutines, (routines) => routines);

interface IProps {
    routines: IRoutine[];
}

const App: FC<IProps> = ({ routines }: IProps) => {
    const [selectedRoutine, setSelectedRoutine] = useState<IRoutine>();

    const onCreate = (routine: IRoutine) => {
        setSelectedRoutine(routine);
    };

    if (!selectedRoutine) {
        return <RoutineCreation onCreate={onCreate} />;
    } else {
        return <RoutineView routine={(selectedRoutine as unknown) as IRoutine} />;
    }
};

const mapStateToProps = (state: AppState) => ({
    routines: getRoutines(state),
});

export default connect(mapStateToProps)(App);
