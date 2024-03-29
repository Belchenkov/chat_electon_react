import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { withBaseLayout } from '../../layouts/Base';
import ChatUserList from '../components/ChatUsersList';
import ChatMessagesList from '../components/ChatMessagesList';
import ViewTitle from '../components/shared/ViewTitle';

import {
    subscribeToChat,
    subscribeToProfile,
} from "../../actions/chats";

function Chat() {
    const { id } = useParams();
    const peopleWatchers = useRef({});
    const dispatch = useDispatch();
    const activeChat = useSelector(({ chats }) => chats.activeChats[id]);
    const joinedUsers = activeChat?.joinedUsers;

    useEffect(() => {
       const unsubFromChat = dispatch(subscribeToChat(id));

       return () => {
           unsubFromChat();
           unsubFromJoinedUsers();
       };
    }, []);

    useEffect(() => {
        joinedUsers && subscribeToJoinedUsers(joinedUsers);

       return () => {
           subscribeToJoinedUsers();
       };
    }, [joinedUsers]);

    const subscribeToJoinedUsers = jUsers => {
        jUsers.forEach(user => {
            if (!peopleWatchers.current[user.uid]) {
                peopleWatchers.current[user.uid] = dispatch(subscribeToProfile(user.uid));
            }
        });
    };

    const unsubFromJoinedUsers = () => {
        Object.keys(peopleWatchers.current).forEach(id => peopleWatchers.current[id]());
    };

    return (
        <div className="row no-gutters fh">
            <div className="col-3 fh">
                <ChatUserList users={activeChat?.joinedUsers || []} />
            </div>
            <div className="col-9 fh">
                { activeChat?.name && <ViewTitle text={`Channel: ${activeChat?.name}`} /> }
                <ChatMessagesList />
            </div>
        </div>
    )
}

export default withBaseLayout(Chat, { canGoBack: true });
