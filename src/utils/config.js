import axios, { CancelToken } from 'axios'

const instance = axios.create({
    baseURL:''
})

// function getRoot() {
//     var hostname = location.hostname;
//     var pathname = location.pathname;
//     var contextPath = pathname.split("/")[1];
//     var port = location.port;
//     var protocol = location.protocol;
//     return protocol + "//" + hostname + ":" + port + "/";
// }
// console.log(getRoot() )
// function getBaseUrl() {
//     if (process.env.NODE_ENV === 'production') {
//         // 打包后不mock, 避免忘记更改配置
//         // return `http://172.17.1.63:7010/`
//         let url = getRoot()
//         return `${url}`
//     }
//     return ''
// }
instance.interceptors.request.use((config) => {
        config.cancelToken = new CancelToken(c => {
            // const { state: { requestCancelArr }} = store
            // store.commit('setRequestCancelArr', [...requestCancelArr, { key: config.url, cancelToken: c }])
        })
        return config
    }, (error) => {
        // return Promise.reject(error)
    })
    // 添加响应拦截器
instance.interceptors.response.use(function(response) {
    return response
}, function(error) {
    try {
        const { status } = error.response
        const data = error.response.data
        switch (status) {
            case 401:
                // autoLogin(store.state.userData.access_token)
                break
                // case 500:
                // case 400:
                // case 504:
                //   Toast(data.message || '系统走神了,错误码:' + status)
                //   break
            default:
                // Toast(data.message || '系统走神了,错误码:' + status)
        }
    } catch (e) {
        // Empty
    }
    return Promise.reject(error)
})

// function getAuthorization(useToken, Authorization) {
//     if (!useToken) {
//         return '' // Basic Ym9uYWRlOmJvbmFkZQ==
//     }
//     const access_token = store.getters.token()
//     return (Authorization || access_token)
// }
// 没有token统一处理
// function noTokenHandle(noLogin) {
//     if (noLogin) return
//     const { path, query } = store.state.route
//     const { platform } = store.state
//     login(() => {
//         if (platform === 'wx') {
//             router.push({ path, query })
//         }
//     })
// }
/**
 通用方法
 useToken 标识该接口是否使用token
 noLogin 标识该接口在没有token的情况是否需要登录， 不传此参数默认在没有token的情况下进行登录
 */
export const ajax = function(url, method, { params, header = {}, otherConfig = {}, useToken, noLogin } = {}) {
    return new Promise((resolve, reject) => {
        try {
            const Authorization = '' // getAuthorization(useToken, header.Authorization)
                // const Channel = getChannel(store.state.platform)
            if (!Authorization && useToken) {
                // 没有token的情况
                // noTokenHandle(noLogin)
                reject()
            }
            const headers = {...header, Authorization }
            const configs = { timeout: 30000, url, method, headers, ...otherConfig }
            if (method === 'GET' || method === 'DELETE') {
                configs.params = params
                configs.data = { unused: 0 }
            } else {
                configs.data = params
            }
            instance(configs).then(res => {
                // if (res.data.code !== 10200) {
                //   return reject(res.data)
                // }
                return resolve(res.data)
            }).catch(err => {
                return reject(err)
            })
        } catch (e) {
            reject(e)
        }
    })
}

// token过期后自动重新登录
// function autoLogin(token) {
//     const params = { token, grantType: 'USER_INFO' }
//     ajax('/trip/oauth-app/authentication/app/login', 'POST', { params }).then(res => {
//         if (res.data.access_token) {
//             store.commit('setUserData', res.data)
//         }
//     })
// }