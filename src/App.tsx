import React, { FC } from 'react';
import { connect } from 'react-redux';
import CharacterSelect from './features/Roster/CharacterSelect';
import RoutineSelection from './features/Routines/RoutineSelection';

interface Props {
    characterSelected: boolean;
}

const App: FC<Props> = ({ characterSelected }) => {
    return <>{characterSelected ? <RoutineSelection /> : <CharacterSelect />}</>;
};

const mapStateToProps = (state: any) => ({
    characterSelected: state.characterSelected,
});

export default connect(mapStateToProps)(App);
