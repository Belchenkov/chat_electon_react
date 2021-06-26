import * as api from '../js/api/auth';

export const registerUser = formData => dispatch =>
    api
        .register(formData)
        .then(user => {
            dispatch({ type: 'AUTH_REGISTER_SUCCESS', user });
            console.log(user, 'user')
            return user;
        });