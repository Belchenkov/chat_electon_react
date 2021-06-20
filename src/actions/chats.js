import * as api from '../js/api/chats';

export function fetchChats() {
    return async function (dispatch) {
        const chats = await api.fetchChats();
        console.log(chats);
    }
}