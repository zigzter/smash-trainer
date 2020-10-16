import { createSelector } from '@reduxjs/toolkit';
import React, { FC } from 'react';
import { connect } from 'react-redux';

import RoutineCreation from './features/Routines/RoutineCreation';
import RoutinePreview from './features/Routines/RoutinePreview';
import RoutineView from './features/Routines/RoutineView';
import { selectRoutine } from './features/Selection/selectionSlice';
import { AppDispatch, AppState, SelectionState } from './store';
import { IRoutine } from './types';

const selectRoutines = (state: AppState) => state.routines;
const getRoutines = createSelector(selectRoutines, (routines) => routines);

interface IProps {
    routines: IRoutine[];
    selection: SelectionState;
    dispatch: AppDispatch;
}

const App: FC<IProps> = ({ routines, selection, dispatch }: IProps) => {
    if (!selection.routine) {
        return (
            <>
                {routines.map((routine) => (
                    <RoutinePreview key={routine.id} routine={routine} />
                ))}
                <RoutineCreation />
            </>
        );
    } else {
        return <RoutineView goHome={() => dispatch(selectRoutine(''))} routineId={selection.routine} />;
    }
};

const mapStateToProps = (state: AppState) => ({
    routines: getRoutines(state),
    selection: state.selection,
});

export default connect(mapStateToProps)(App);
