import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Home from "./views/Home";
import Navbar from "./components/Navbar";
import ChatView from "./views/Chat";
import Settings from "./views/Settings";
import Register from "./views/Register";
import Login from "./views/Login";

const App = () => {
    return (
            <Router>
                <Navbar />
                <div className='content-wrapper'>
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/chat">
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
    )
};

export default App;
