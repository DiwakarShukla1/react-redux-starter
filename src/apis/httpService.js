const obj = {
    get(url, params) {
        return makeHttpCall(url, 'get', params);
    },
    post(url, body, isLogin) {
        return makeHttpCall(url, 'post', body, isLogin);
    },
    delete(url, id) {
        return makeHttpCall(url, 'delete', id)
    },
    put(url, body) {
        return makeHttpCall(url, 'put', body);
    }
};

function makeHttpCall(url, method, body, isLogin) {
    let NEW_URL = 'http://192.168.0.105:3050/' + url;
    if (method === 'get') {
        NEW_URL += constructParams(body);
    } else if (method === 'delete') {
        NEW_URL = `${NEW_URL}/${body}`; // .JSON Removed 
    }

    const options = buildOptions(method, body, isLogin);
    const promise = new Promise((resolve, reject) => {
        fetch(NEW_URL, options)
            .then(checkStatus)
            .then((response) => {
                if (response.success) {
                    resolve(response);
                } else {
                    reject(response);    
                }
            }).catch((message) => {
                reject(message);
            });
    });

    return promise;
}

function checkStatus(data) {
    const promise = new Promise((resolve, reject) => {
        if (data.status === 200) {
            resolve(data.json());
        } else if (data.status === 401) {
            localStorage.clear()
            // hashHistory.push("/");
            reject(data.json());
        } else {
            reject(data.json());
        }
    });
    return promise;
}

function buildOptions(method, body, isLogin) {
    const options = {
        method: method
    };

    if (method === 'post' || method === 'put') {
        options.body = JSON.stringify(body);
    }

    // const token = tokenService.getToken();

    options.headers = new Headers();
    options.headers.append('Content-Type', 'application/json');

    // if (!isLogin) {
    //     options.headers.append('X-Auth-Token', token);
    // } else {
        options.headers.append('MOBILE', 'no');
    // }

    return options;
}

function constructParams(params = {}) {
    const keys = Object.keys(params);

    if (keys.length === 0) {
        return "";
    }

    let paramString = '?';

    for (let i = 0, ii = keys.length; i < ii; i++) {
        paramString += `${keys[i]}=${params[keys[i]]}`;

        if (i !== ii - 1) {
            paramString += '&';
        }
    }

    return paramString;
}

export default obj;