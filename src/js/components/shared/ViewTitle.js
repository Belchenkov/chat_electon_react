import React from 'react';
import { Link } from 'react-router-dom';

const ViewTitle = ({ text, children }) => {
    return (
        <div className="chat-name-container align-items-center">
            <span className="name">{ text }</span>
            <div>{ children }</div>
            <Link
                to="/"
                className="btn btn-primary btn-sm back-button"
            >
                <i className="far fa-arrow-alt-circle-left mr-2" />
                Back
            </Link>
        </div>
    );
};

export default ViewTitle;
