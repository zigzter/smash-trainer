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
    const [selectedRoutineId, setSelectedRoutineId] = useState('');

    const onCreate = (id: string) => {
        setSelectedRoutineId(id);
    };

    if (!selectedRoutineId) {
        return (
            <>
                {routines.map((routine) => (
                    <p key={routine.id}>{routine.name}</p>
                ))}
                <RoutineCreation onCreate={onCreate} />
            </>
        );
    } else {
        return <RoutineView routineId={selectedRoutineId} />;
    }
};

const mapStateToProps = (state: AppState) => ({
    routines: getRoutines(state),
});

export default connect(mapStateToProps)(App);
