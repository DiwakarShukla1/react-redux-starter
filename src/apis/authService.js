import httpService from './httpService';

const obj = {
    doLogin(credentials) {
        const url = 'users/sign_in';
        return httpService.post(url, credentials);
    }     
};

export default obj;