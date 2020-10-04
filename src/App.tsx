import React, { FC } from 'react';
import { connect } from 'react-redux';
import CharacterSelect from './components/CharacterSelect';
import RoutineCreation from './components/RoutineCreation';

const App: FC = ({ characterSelected }: any) => {
    return <>{characterSelected ? <RoutineCreation /> : <CharacterSelect />}</>;
};

const mapStateToProps = (state: any) => ({
    characterSelected: state.characterSelected,
});

export default connect(mapStateToProps)(App);
