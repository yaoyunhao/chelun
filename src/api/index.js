import JSBridge from '../utils/JSBridge';

// 封装请求方法
function sendRequest(url, method = 'GET', data = {}) {
    let params = {
        method
    };
    // 判断如果是一个post请求，带上请求体信息
    if (method == 'POST') {
        params.body = JSON.stringify(data);
    }
    // 判断请求查询url是否携带query
    if (url.indexOf('?') == -1) {
        url += `?_=${+new Date()}`
    } else {
        url += `&_=${+new Date()}`
    }
    // 拼接登陆态token
    // url += `&token=${getToken()}`;
    return fetch(url, params)
        .then(res => res.json())
        .then(body => body);
}
//唤醒登陆
export let goLogin = () => {
        JSBridge.invoke('app', 'login', {
            loginCallBackName: () => window.reload()
        })
    }
    //唤起支付
export let goPay = () => {
    JSBridge.invoke('app', 'pay', {
        price: 398.00,
        orderNum: '6486860195682793473',
        channels: ['weixin', 'alipay', 'baidu'],
        callbackUrl: 'https://h5/chelun.com/2017/update-licence2/order.html'
    })
}

export let uploadImg = (type) => {
    return new Promise((resolve, reject) => {
        JSBridge.invoke('device', 'chooseImage', {
            type,
            chooseCallbackName: function(res) {
                resolve(res);
            }
        })
    })
}

// 获取签发城市
export let cityList = () => {
    return sendRequest('/api/ExchangeJiaZhao/cityList')
}

// 获取可补换的城市
export let costList = (...params) => {
    console.log('params...', params);
    return sendRequest(`/api/ExchangeJiaZhao/getCostList?order_type=${params[0]}&province_id=${params[1]}&city_id=${params[2]}`)
}