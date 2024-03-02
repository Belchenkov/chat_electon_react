import React from 'react';

export default function ChatUserList({ users = [] }) {

    return(
        <div className="list-container">
            <div className="chat-search-box">
                <div className="input-group">
                    <input className="form-control" placeholder="Search" />
                </div>
            </div>
            <ul className="items">
                {
                    users.map(user => (
                        <li
                            onClick={() => {}}
                            className="item">
                            <div className="item-status">
                                <img src={user.avatar} alt="Retail Admin" />
                                <span className="status online" />
                            </div>
                            <p className="name-time">
                                <span className="name mr-2">{ user.name }</span>
                            </p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
