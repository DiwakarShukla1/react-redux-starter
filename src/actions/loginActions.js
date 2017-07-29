export const makeLogin = () => ({
    type : 'MAKE_LOGIN',
});

export const loginSuccess = () => ({
    type : 'LOGIN_SUCCESS'
});

export const loginError = (error) => ({
    type : 'LOGIN_ERROR',
    error
}); 