export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case 'MAKE_LOGIN' : 
            return {loggedIn : false, status : 'authenticating...'};
        case 'LOGIN_SUCCESS' :
            return {loggedIn : true, status : 'Successfully logged in...'};
        case 'LOGIN_ERROR' :
            return {loggedIn : false, status : action.error};
        default :
            return state;
    }
};