import * as api from '../js/api/connection';

export const checkUserConnection = uid => dispatch => {
    api.onConnectionChanged(isConnected => {
        api.setUserOnlineStatus(uid, isConnected).then();
        dispatch({ type: 'CONNECTION_USER_STATUS_CHANGED'});
    });
};
