import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import {
    HashRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import configureStore from "../store";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import ChatView from "./views/Chat";
import Settings from "./views/Settings";
import Welcome from "./views/Welcome";

import { listenToAuthChanges } from "../actions/auth";

const store = configureStore();

const App = () => {
    useEffect(() => {
        store.dispatch(listenToAuthChanges())
    }, []);

    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <div className='content-wrapper'>
                    <Switch>
                        <Route path="/" exact>
                            <Welcome />
                        </Route>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/chat/:id">
                            <ChatView />
                        </Route>
                        <Route path="/settings">
                            <Settings />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </Provider>
    )
};

export default App;
