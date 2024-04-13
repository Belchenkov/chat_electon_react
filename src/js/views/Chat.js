import React, { useEffect, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { withBaseLayout } from '../../layouts/Base';
import ChatUserList from '../components/ChatUsersList';
import ChatMessagesList from '../components/ChatMessagesList';
import ViewTitle from '../components/shared/ViewTitle';
import LoadingView from '../components/shared/LoadingView';
import Messenger from '../components/Messenger';

import {
    subscribeToChat,
    subscribeToProfile,
} from "../../actions/chats";

function Chat(callback, deps) {
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

    const subscribeToJoinedUsers = useCallback(jUsers => {
        jUsers.forEach(user => {
            if (!peopleWatchers.current[user.uid]) {
                peopleWatchers.current[user.uid] = dispatch(subscribeToProfile(user.uid, id));
            }
        });
    }, [dispatch, id]);

    const unsubFromJoinedUsers = useCallback(() => {
        Object.keys(peopleWatchers.current).forEach(id => peopleWatchers.current[id]());
    }, [peopleWatchers.current]);

    const sendMessage = message => {
        alert(message);
    };

    if (!activeChat?.id) {
        return <LoadingView message="Loading Chat..." />
    }

    return (
        <div className="row no-gutters fh">
            <div className="col-3 fh">
                <ChatUserList users={activeChat?.joinedUsers || []} />
            </div>
            <div className="col-9 fh">
                { activeChat?.name && <ViewTitle text={`Channel: ${activeChat?.name}`} /> }
                <ChatMessagesList />
                <Messenger onSubmit={sendMessage} />
            </div>
        </div>
    )
}

export default withBaseLayout(Chat, { canGoBack: true });
