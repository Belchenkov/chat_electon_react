import * as api from '../js/api/auth';

export const registerUser = formData => dispatch => {
    dispatch({ type: 'AUTH_REGISTER_INIT' });

    return  api
        .register(formData)
        .then(_ => dispatch({ type: 'AUTH_REGISTER_SUCCESS' }));
}

export const loginUser = formData => dispatch => {
    dispatch({ type: 'AUTH_LOGIN_INIT' });

    return api
        .login(formData)
        .then(_ => dispatch({type: 'AUTH_LOGIN_SUCCESS'}));
}

export const logout = () => dispatch => {
    return api
        .logout()
        .then(_ => dispatch({ type: 'AUTH_LOGOUT_SUCCESS' }));
};

export const listenToAuthChanges = () => dispatch => {
    dispatch({ type: 'AUTH_ON_INIT' });

    return api
        .onAuthStateChanges(authUser => {
            if (authUser) {
                dispatch({ type: 'AUTH_ON_SUCCESS', user: authUser });
                console.log('We are authenticated!');
            } else {
                dispatch({ type: 'AUTH_ON_ERROR' });
                console.log('We are not authenticated!');
            }
        });
};
