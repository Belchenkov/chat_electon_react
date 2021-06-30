import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { logout } from "../../actions/auth";

const Navbar = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(({ auth }) => auth.user);
    const isChecking = useSelector(({ auth }) => auth.isChecking);

    return (
        <div className="chat-navbar">
            <nav className="chat-navbar-inner">
                <div className="chat-navbar-inner-left">
                    <button
                        onClick={() => history.goBack()}
                        className="btn btn-sm btn-outline-primary"
                    >
                        <i className="far fa-arrow-alt-circle-left mr-2" />
                        Back
                    </button>
                    <Link to="/settings" className="btn btn-outline-secondary ml-2">
                        <i className="fas fa-wrench mr-2" />
                        Settings
                    </Link>
                </div>
                <div className="chat-navbar-inner-right">
                    {! user && (
                        <>
                            <Link
                                to="/"
                                className="btn btn-outline-success ml-2"
                            >
                                <i className="fab fa-expeditedssl mr-2"/>
                                Login
                            </Link>
                        </>
                    )}
                    { user && (
                        <>
                            <img className="avatar mr-2" src={user.avatar} alt="Avatar"/>
                            <span className="logged-in-user">Hi, { user.username }</span>
                            <button
                                className="btn btn-outline-danger ml-4"
                                onClick={() => dispatch(logout())}
                            >
                                <i className="fa fa-sign-out mr-2" />
                                Logout
                            </button>
                        </>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
