import React, { ChangeEvent, FC, useState } from 'react';
import { connect } from 'react-redux';

import { routineCreated } from './routinesSlice';
import { AppDispatch, AppState } from '../../store';
import { IRoutine } from '../../types';

interface IProps {
    routines: IRoutine[];
    dispatch: AppDispatch;
    onCreate(id: string): void;
}

const RoutineSelection: FC<IProps> = ({ routines, dispatch, onCreate }: IProps) => {
    const [isCreating, setIsCreating] = useState(false);
    const [routineName, setRoutineName] = useState('');

    const onClick = () => {
        if (isCreating) {
            const { payload: routine } = dispatch(routineCreated(routineName));
            onCreate(routine.id);
        } else {
            setIsCreating(true);
        }
    };

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setRoutineName(event.target.value);
    };

    const onBlur = () => {
        setRoutineName(routineName.trim());
    };

    return (
        <>
            {isCreating && <input type="text" onChange={onChange} value={routineName} onBlur={onBlur} />}
            <button onClick={onClick}>{isCreating ? 'Save Routine' : 'Create Routine'}</button>
        </>
    );
};

const mapStateToProps = (state: AppState) => ({
    routines: state.routines,
});

export default connect(mapStateToProps)(RoutineSelection);
