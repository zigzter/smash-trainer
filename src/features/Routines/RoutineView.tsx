import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { AppDispatch, AppState } from '../../store';
import { routineDeleted } from './routinesSlice';
import { IRoutine } from '../../types';
import MovesSelect from '../Moves/MovesSelect';
import MoveChain from '../Moves/MoveChain';
import { Button } from '@material-ui/core';

interface IMapState {
    dispatch: AppDispatch;
    routine: IRoutine | undefined;
}

type IProps = IMapState & RouteComponentProps<{ id: string }>;

const RoutineView: FC<IProps> = ({ routine, dispatch, history }: IProps) => {
    const [isEditing, setIsEditing] = useState(false);
    if (!routine) {
        return null;
    }

    const handleDelete = () => {
        dispatch(routineDeleted(routine.id));
    };

    const handleEdit = () => {
        setIsEditing((prevState) => !prevState);
    };

    return (
        <div>
            <p onClick={() => history.push('/')}>X</p>
            <h1>{routine.name}</h1>
            {routine.moveChainCollections.map(({ moveChainCollection }) =>
                moveChainCollection.map(({ moves }) => <MoveChain moves={moves} />),
            )}
            {isEditing && <MovesSelect routineId={routine.id} />}
            <Button onClick={handleEdit}>Edit Routine</Button>
            <Button onClick={handleDelete}>Delete Routine</Button>
        </div>
    );
};

const mapStateToProps = (state: AppState, props: IProps) => ({
    routine: state.routines.find((routine) => routine.id === props.match.params.id),
});

export default connect(mapStateToProps)(RoutineView);
