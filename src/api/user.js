import { postData } from "../utils/http";
import { ajax } from "../utils/config";
// export const login = data => {
//   return postData('/login', 'post', data)
// }

// fetchDrawingRights(params, config = {}) {
//   return ajax(`/platformManager/datasource/getOracleRights`, 'GET', { params, header: { "Content-Type": "multipart/form-data" } })
// }
const header = {
  Accept: "application/json,text/plain,*/*",
  "Content-Type": "application/x-www-form-urlencoded",
};

const userHttp = {
  login: (params) => {
    return ajax("/login", "post", { params, header });
  },
};
export default userHttp;
