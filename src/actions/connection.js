import * as api from '../js/api/connection';

export const checkUserConnection = () => dispatch => {
    api.onConnectionChanged(isConnected => {
        dispatch({ type: 'CONNECTION_USER_STATUS_CHANGED'});
    });
};
