// import qs from "querystring";
import axios from "axios"
export function getData(url) {
  const result = axios(url);
  return result;
}
export function postData(url, method = "post", data) {
  const result = axios(url, {
    method,
    header: {
      Accept: "application/json,text/plain,*/*",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data
  });

  return result;
}
