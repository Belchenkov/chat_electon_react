const DEFAULT_STATE = {
    user: null,
    isChecking: false
};

export default function authReducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case 'AUTH_ON_INIT':
            return {
                ...state,
                user: null,
                isChecking: true
            }
        case 'AUTH_ON_SUCCESS':
            return {
                ...state,
                user: action.user,
                isChecking: false
            }
        case 'AUTH_ON_ERROR':
            return {
                ...state,
                user: null,
                isChecking: false
            }
        default:
            return state;
    }
};