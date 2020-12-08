import React from 'react';

const ViewTitle = () => {
    return (
        <div className="chat-name-container">
            <span className="name">Choose your channel</span>
            <a
                href="/"
                className="btn btn-primary btn-sm back-button">
                <i className="far fa-arrow-alt-circle-left mr-2" />
                Back
            </a>
        </div>
    );
};

export default ViewTitle;
