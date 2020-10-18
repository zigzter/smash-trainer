import React, { FC } from 'react';
import { createSelector } from '@reduxjs/toolkit';
import { RouteComponentProps } from 'react-router-dom';
import RoutinePreview from './RoutinePreview';
import { IRoutine } from '../../types';
import { AppDispatch, AppState, SelectionState } from '../../store';
import { connect } from 'react-redux';

const selectRoutines = (state: AppState) => state.routines;
const getRoutines = createSelector(selectRoutines, (routines) => routines);

interface Props extends RouteComponentProps {
    routines: IRoutine[];
    selection: SelectionState;
    dispatch: AppDispatch;
}

const RoutinePreviews: FC<Props> = ({ routines, history }: Props) => {
    const navigateToRoutine = (id: string) => {
        history.push(`/routines/${id}`);
    };
    return (
        <div>
            {routines.map((routine) => (
                <RoutinePreview key={routine.id} onClick={() => navigateToRoutine(routine.id)} routine={routine} />
            ))}
        </div>
    );
};

const mapStateToProps = (state: AppState) => ({
    routines: getRoutines(state),
});

export default connect(mapStateToProps)(RoutinePreviews);
