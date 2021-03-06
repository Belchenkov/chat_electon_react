import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import Home from "./views/Home";
import ChatView from "./views/Chat";
import Settings from "./views/Settings";
import Welcome from "./views/Welcome";
import LoadingView from "./components/shared/LoadingView";
import StoreProvider from "../store/StoreProvider";

import { listenToAuthChanges } from "../actions/auth";

const AuthRoute = ({ children, ...rest }) => {
    const user = useSelector(({ auth }) => auth.user);
    const onlyChild = React.Children.only(children);

    return (
        <Route
            {...rest}
            render={props => user
                    ? React.cloneElement(onlyChild, {...rest, ...props})
                    : <Redirect to="/" />}
        />
    )
};

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
            <ContentWrapper>
                <Switch>
                    <Route path="/" exact>
                        <Welcome />
                    </Route>
                    <AuthRoute path="/home">
                        <Home />
                    </AuthRoute>
                    <AuthRoute path="/chat/:id">
                        <ChatView />
                    </AuthRoute>
                    <AuthRoute path="/settings">
                        <Settings />
                    </AuthRoute>
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
