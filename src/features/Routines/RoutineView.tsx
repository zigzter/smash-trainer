import React, { FC } from 'react';
import { connect } from 'react-redux';

import { AppState } from '../../store';
import { IRoutine } from '../../types';
import MovesSelect from './MovesSelect';

interface IComponentProps {
    routineId: string;
}

interface IMapState {
    routine: IRoutine | undefined;
}

type IProps = IComponentProps & IMapState;

const RoutineView: FC<IProps> = ({ routine }: IProps) => {
    if (!routine) {
        return null;
    }
    return (
        <div>
            <h1>{routine.name}</h1>
            {routine.moveChains.map(({ moves }) => (
                <p key={Math.random()}>{moves.join(', ')}</p>
            ))}
            <MovesSelect routineId={routine.id} />
        </div>
    );
};

const mapStateToProps = (state: AppState, props: IComponentProps) => ({
    routine: state.routines.find((routine) => routine.id === props.routineId),
});

export default connect(mapStateToProps)(RoutineView);
