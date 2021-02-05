import React from 'react';

const ChatSearch = () => {
    return (
        <div className="chat-search-box">
            <div className="input-group">
                <input className="form-control" placeholder="Search" />
                <div className="input-group-append">
                    <button className="btn btn-sm btn-outline-info" type="button">
                        <i className="fa fa-search" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatSearch;
