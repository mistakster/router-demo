import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import store from '../redux/store';
import history from '../redux/history';
import People from './pages/People';
import EditPerson from './pages/EditPerson';
import NotFound from './pages/NotFound';

function App() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact path="/" component={People}/>
                    <Route exact path="/:id" component={EditPerson}/>
                    <Route component={NotFound}/>
                </Switch>
            </ConnectedRouter>
        </Provider>
    );
}

export default App;
