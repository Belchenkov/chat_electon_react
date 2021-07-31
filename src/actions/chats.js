import * as api from '../js/api/chats';
import db from '../js/db/firestore';

export const fetchChats = () => async (dispatch, getState) => {
    dispatch({ type: 'CHATS_FETCH_INIT' });

    const { user } = getState().auth;
    const chats = await api.fetchChats();
    chats.forEach(chat => chat.joinedUsers = chat.joinedUsers?.map(user => user.id));

    const sortedChats = chats.reduce((accumChats, chat) => {
        const chatToJoin = chat.joinedUsers && chat.joinedUsers.includes(user.uid) ? 'joined' : 'available';
        accumChats[chatToJoin].push(chat);
        return accumChats;
    }, { joined: [], available: [] });

    dispatch({
        type: 'CHATS_FETCH_SUCCESS',
        ...sortedChats
    });

    console.log(sortedChats);
    return sortedChats;
}

export const createChat = (formData, userId) => async dispatch => {
    const newChat = { ...formData };
    newChat.admin = db.doc(`profiles/${userId}`);

    const chatId = await api.createChat(newChat);
    dispatch({ type: 'CHATS_CREATE_SUCCESS' });

    await api.joinChat(userId, chatId);
    dispatch({ type: 'CHATS_JOIN_SUCCESS' });

    return chatId;
}
