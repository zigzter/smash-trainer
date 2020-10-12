import React, { ChangeEvent, FC, useState } from 'react';
import { connect } from 'react-redux';
import { movesAdded, routineCreated } from './routinesSlice';
import { AppDispatch, AppState } from '../../store';
import { IRoutine } from '../../types';

interface IProps {
    routines: IRoutine[];
    dispatch: AppDispatch;
}

const RoutineSelection: FC<IProps> = ({ routines, dispatch }: IProps) => {
    const [isCreating, setIsCreating] = useState(false);
    const [routineName, setRoutineName] = useState('');

    const onClick = () => {
        if (isCreating) {
            dispatch(routineCreated(routineName));
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
