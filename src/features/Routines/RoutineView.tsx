import React, { FC } from 'react';
import { connect } from 'react-redux';

import { AppDispatch, AppState } from '../../store';
import { routineDeleted } from './routinesSlice';
import { IRoutine } from '../../types';
import MovesSelect from './MovesSelect';

interface IComponentProps {
    routineId: string;
    goHome(): void;
}

interface IMapState {
    dispatch: AppDispatch;
    routine: IRoutine | undefined;
}

type IProps = IComponentProps & IMapState;

const RoutineView: FC<IProps> = ({ routine, goHome, dispatch }: IProps) => {
    if (!routine) {
        return null;
    }

    const handleDelete = () => {
        dispatch(routineDeleted(routine.id));
    };

    return (
        <div>
            <p onClick={goHome}>X</p>
            <h1>{routine.name}</h1>
            {routine.moveChains.map(({ moves }) => (
                <p key={Math.random()}>{moves.join(', ')}</p>
            ))}
            <MovesSelect routineId={routine.id} />
            <button onClick={handleDelete}>Delete Routine</button>
        </div>
    );
};

const mapStateToProps = (state: AppState, props: IComponentProps) => ({
    routine: state.routines.find((routine) => routine.id === props.routineId),
});

export default connect(mapStateToProps)(RoutineView);
