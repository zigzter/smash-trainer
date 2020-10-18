import React, { FC } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { AppDispatch, AppState } from '../../store';
import { routineDeleted } from './routinesSlice';
import { IRoutine } from '../../types';
import MovesSelect from './MovesSelect';
import { Chip } from '@material-ui/core';

interface IMapState {
    dispatch: AppDispatch;
    routine: IRoutine | undefined;
}

type IProps = IMapState & RouteComponentProps;

const RoutineView: FC<IProps> = ({ routine, dispatch, history }: IProps) => {
    if (!routine) {
        return null;
    }

    const handleDelete = () => {
        dispatch(routineDeleted(routine.id));
    };

    return (
        <div>
            <p onClick={() => history.push('/')}>X</p>
            <h1>{routine.name}</h1>
            {routine.moveChains.map(({ moves }) => moves.map((move) => <Chip label={move} />))}
            <MovesSelect routineId={routine.id} />
            <button onClick={handleDelete}>Delete Routine</button>
        </div>
    );
};

const mapStateToProps = (state: AppState, props: any) => ({
    routine: state.routines.find((routine) => routine.id === props.match.params.id),
});

export default connect(mapStateToProps)(RoutineView);
