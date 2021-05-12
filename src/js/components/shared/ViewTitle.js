import React from 'react';
import { Link } from 'react-router-dom';

const ViewTitle = ({ text }) => {
    return (
        <div className="chat-name-container">
            <span className="name">{ text }</span>
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
