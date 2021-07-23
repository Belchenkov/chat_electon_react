import * as api from '../js/api/chats';
import db from '../js/db/firestore';

export const fetchChats = () => dispatch =>
    api
        .fetchChats()
        .then(chats => dispatch({ type: 'CHATS_FETCH_SUCCESS', chats }));

export const createChat = (formData, userId) => dispatch => {
    const newChat = { ...formData };
    const useRef = db.doc(`profile/${userId}`);

    newChat.admin = useRef;
    newChat.joinedUsers = [useRef];

    return api
        .createChat(formData)
        .then(_ => dispatch({ type: 'CHATS_CREATE_SUCCESS' }));
}
