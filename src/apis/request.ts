import axios from 'axios';

// 从localStorage中获取token
function getLocalToken() {
    return window.localStorage.getItem('token')
}


const instance = axios.create({
    baseURL: '/api',
    timeout: 300000,
    headers: {
        'Content-Type': 'application/json',
        'X-Token': getLocalToken() // headers塞token
    }
});


// 给实例添加一个setToken方法，用于登录后将最新token动态添加到header，同时将token保存在localStorage中
// @ts-ignore
instance.setToken = (token) => {
    instance.defaults.headers['X-Token'] = token
    window.localStorage.setItem('token', token)
}


// 拦截返回的数据
instance.interceptors.response.use(response => {
    // 接下来会在这里进行token过期的逻辑处理
    console.log(response, 'response');
    return response
}, error => {
    return Promise.reject(error)
})


export default instance;
