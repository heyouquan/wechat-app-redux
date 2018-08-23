const staticURL = 'https://www.xxx.com';
const COOKIE_STORE_KEY = 'APP_SSID';
const defaultHeader = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

export function Request(url, data) {
    return new Promise((resolve, reject) => {
        let header = {};
        const cookie = wx.getStorageInfoSync(COOKIE_STORE_KEY);
        if(cookie) {
            header = Object.assign({}, defaultHeader, {cookie: cookie});
        } else {
            header = Object.assign({}, defaultHeader);
        }

        wx.request({
            url: `${staticURL}${url}`,
            data: data,
            header: header,
            method: 'POST',
            success: function(res) {
                if(res.header["Set-Cookie"]) {
                    console.warn("there are cookie, store to storage", res.header["Set-Cookie"]);
                    wx.setStorageSync(COOKIE_STORE_KEY, res.header["Set-Cookie"]);
                }
                if(res.statusCode === 200 && res.data) {
                    return resolve(res.data)
                }
                resolve(res);
            },
            fail: function(err) {
                reject(err);
                console.log(err)
            }
        })
    })
}

export function fetchData(url, data, method) {
    return fetch(url, {
        body: JSON.stringify(data),
        headers: defaultHeader,
        method: method
    }).then((res) => {
        return res.json()
    })
}