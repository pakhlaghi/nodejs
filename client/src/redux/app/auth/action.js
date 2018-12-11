import {
    AUTHENTICATE,
    LOGOUT
} from './type';

export const authenticate = () => {
    return {
        type: AUTHENTICATE,
        payload: null
    }
};

export const logout = () => {
    return {
        type: LOGOUT,
        payload: null
    }
};
