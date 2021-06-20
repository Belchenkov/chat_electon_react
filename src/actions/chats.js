import * as api from '../js/api/chats';

export function fetchChats() {
    return async function (dispatch) {
        const chats = await api.fetchChats();

        dispatch({
           type: 'CHATS_FETCH_SUCCESS',
           chats
        });

        return chats;
    }
}