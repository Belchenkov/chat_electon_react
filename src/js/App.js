import React from 'react';
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
import Register from "./views/Register";
import Login from "./views/Login";

const store = configureStore();

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <div className='content-wrapper'>
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/chat/:id">
                            <ChatView />
                        </Route>
                        <Route path="/settings">
                            <Settings />
                        </Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </Provider>
    )
};

export default App;
