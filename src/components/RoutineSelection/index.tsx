import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import { routineCreated } from '../../actions';
import { IReduxState, IRoutineState, TCharacter } from '../../types';

interface IProps {
    routines: IRoutineState;
    dispatch: any;
    characterSelected: TCharacter;
}

const RoutineSelection: FC<IProps> = ({ routines, dispatch, characterSelected }) => {
    const [isCreating, setIsCreating] = useState(false);
    const [routineName, setRoutineName] = useState('');

    const onClick = () => {
        if (isCreating) {
            dispatch(routineCreated({ character: characterSelected, name: routineName }));
        } else {
            setIsCreating(true);
        }
    }

    const onChange = (event) => {
        console.log(event.target);
    }

    return (
        <>
            {isCreating && <input type="text" onChange={onChange} />}
            <button onClick={onClick}>{isCreating ? 'Save Routine' : 'Create Routine'}</button>
        </>
    )
}

const mapStateToProps = (state: IReduxState) => ({
    routines: state.routines,
    characterSelected: state.characterSelected,
})

export default connect(mapStateToProps)(RoutineSelection);
