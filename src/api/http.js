import Axios from 'axios'
import router from '../router'
const axios = Axios.create({
  // baseURL: process.env.NODE_ENV === 'development' ? '' : '',
})

// axios.interceptors.request.use((req)=>{
//   if(req.url !== '/login'){
//     req.headers.Authorization = sessionStorage.getItem('token')
//     // const action = 
//    const currentRight = router.currentRoute
//   }
//   return res
// })

export default (url, method = 'get', data = {}) => {
  return axios({
    url,
    method,
    data
  })
}