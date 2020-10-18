import { Container } from '@material-ui/core';
import { createSelector } from '@reduxjs/toolkit';
import React, { FC } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import RoutineCreation from './features/Routines/RoutineCreation';
import RoutinePreview from './features/Routines/RoutinePreview';
import RoutineView from './features/Routines/RoutineView';
import { AppDispatch, AppState, SelectionState } from './store';
import { IRoutine } from './types';

const selectRoutines = (state: AppState) => state.routines;
const getRoutines = createSelector(selectRoutines, (routines) => routines);

interface IProps {
    routines: IRoutine[];
    selection: SelectionState;
    dispatch: AppDispatch;
}

const App: FC<IProps> = ({ routines }: IProps) => {
    return (
        <Container>
            <Router>
                <Switch>
                    <Route path="/create" component={RoutineCreation} />
                    <Route path="/routine/:id" component={RoutineView} />
                    <Route path="/">
                        <>
                            {routines.map((routine) => (
                                <RoutinePreview key={routine.id} routine={routine} />
                            ))}
                        </>
                    </Route>
                </Switch>
            </Router>
        </Container>
    );
};

const mapStateToProps = (state: AppState) => ({
    routines: getRoutines(state),
    selection: state.selection,
});

export default connect(mapStateToProps)(App);
