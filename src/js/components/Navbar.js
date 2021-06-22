import React from 'react';
import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
    const history = useHistory();

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
                    <span className="logged-in-user">Hi User</span>
                    {/*<Link*/}
                    {/*    to="/register"*/}
                    {/*    onClick={() => {}}*/}
                    {/*    className="btn btn-outline-info ml-2"*/}
                    {/*>*/}
                    {/*    <i className="fas fa-user-plus mr-2" />*/}
                    {/*    Register*/}
                    {/*</Link>*/}
                    <Link
                        to="/"
                        onClick={() => {}}
                        className="btn btn-outline-success ml-2"
                    >
                        <i className="fab fa-expeditedssl mr-2" />
                        Login
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
