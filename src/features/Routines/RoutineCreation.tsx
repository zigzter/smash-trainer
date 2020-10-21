import React, { ChangeEvent, FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import { routineCreated } from './routinesSlice';

const RoutineSelection: FC = () => {
    const [isCreating, setIsCreating] = useState(false);
    const [routineName, setRoutineName] = useState('');
    const dispatch = useDispatch();

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

export default RoutineSelection;
