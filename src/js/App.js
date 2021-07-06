import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    HashRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Home from "./views/Home";
import Navbar from "./components/Navbar";
import ChatView from "./views/Chat";
import Settings from "./views/Settings";
import Welcome from "./views/Welcome";
import LoadingView from "./components/shared/LoadingView";
import StoreProvider from "../store/StoreProvider";

import { listenToAuthChanges } from "../actions/auth";

const ContentWrapper = ({ children }) => (
    <div className="content-wrapper">{children}</div>
);

const ChatApp = () => {
    const dispatch = useDispatch();
    const isChecking = useSelector(({ auth }) => auth.isChecking);

    useEffect(() => {
        dispatch(listenToAuthChanges())
    }, []);

    if (isChecking) {
        return <LoadingView />
    }

    return (
        <Router>
            <Navbar />
            <ContentWrapper>
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
            </ContentWrapper>
        </Router>
    )
};

export default function App() {
    return (
        <StoreProvider>
            <ChatApp />
        </StoreProvider>
    )
}
