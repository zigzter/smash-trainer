import React, { FC } from 'react';
import { createSelector } from '@reduxjs/toolkit';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

import RoutinePreview from './RoutinePreview';
import RoutineCreation from './RoutineCreation';
import { IRoutine } from '../../types';
import { AppDispatch, AppState, SelectionState } from '../../store';

const selectRoutines = (state: AppState) => state.routines;
const getRoutines = createSelector(selectRoutines, (routines) => routines);

interface IProps extends RouteComponentProps {
    routines: IRoutine[];
    selection: SelectionState;
    dispatch: AppDispatch;
}

const RoutinePreviews: FC<IProps> = ({ routines, history }: IProps) => {
    const navigateToRoutine = (id: string) => {
        history.push(`/routines/${id}`);
    };
    return (
        <div>
            {routines.map((routine) => (
                <RoutinePreview key={routine.id} onClick={() => navigateToRoutine(routine.id)} routine={routine} />
            ))}
            <RoutineCreation />
        </div>
    );
};

const mapStateToProps = (state: AppState) => ({
    routines: getRoutines(state),
});

export default connect(mapStateToProps)(RoutinePreviews);
