import { Container } from '@material-ui/core';
import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import RoutineCreation from './features/Routines/RoutineCreation';
import RoutinePreviews from './features/Routines/RoutinePreviews';
import RoutineView from './features/Routines/RoutineView';

const App: FC = () => {
    return (
        <Container>
            <Router>
                <Switch>
                    <Route path="/create" component={RoutineCreation} />
                    <Route path="/routine/:id" component={RoutineView} />
                    <Route path="/" component={RoutinePreviews} />
                </Switch>
            </Router>
        </Container>
    );
};

export default App;
