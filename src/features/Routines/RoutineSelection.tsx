import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import { routineCreated } from './routinesSlice';
import { AppDispatch, AppState } from '../../store';
import { IRoutinesState, TCharacter } from '../../types';

interface IProps {
    routines: IRoutinesState;
    dispatch: AppDispatch;
    characterSelected: TCharacter | '';
}

const RoutineSelection: FC<IProps> = ({ routines, dispatch, characterSelected }: IProps) => {
    const [isCreating, setIsCreating] = useState(false);
    const [routineName, setRoutineName] = useState('');

    const onClick = () => {
        if (isCreating) {
            dispatch(routineCreated({ character: characterSelected, name: routineName }));
        } else {
            setIsCreating(true);
        }
    };

    const onChange = (event) => {
        console.log(event.target);
    };

    return (
        <>
            {isCreating && <input type="text" onChange={onChange} />}
            <button onClick={onClick}>{isCreating ? 'Save Routine' : 'Create Routine'}</button>
        </>
    );
};

const mapStateToProps = (state: AppState) => ({
    routines: state.routines,
    characterSelected: state.roster.characterSelected,
});

export default connect(mapStateToProps)(RoutineSelection);
