import React from 'react';
import { useHistory } from 'react-router-dom';

import ChatSearch from "./ChatSearch";

const JoinedChatsList = ({ chats }) => {
    const history = useHistory();

    return (
        <div className="list-container">
            <ChatSearch />
            <ul className="items">
                {
                    chats.map(chat => (
                        <li
                            key={chat.id}
                            onClick={() => history.push(`/chat/${chat.id}`)}
                            className="item"
                        >
                            <div className="item-status">
                                <img className="sidebar-chat-img" src={chat.image} alt={chat.name} />
                                <span className="status online" />
                            </div>
                            <p className="name-time">
                                <span className="name mr-2">{chat.name}</span>
                            </p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default JoinedChatsList;
