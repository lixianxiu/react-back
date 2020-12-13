/**
 *  针对用户的保存 与 删除 与 读取
 */
const USER = "user";
export default {
  saveUser(user) {
    localStorage.setItem(USER, JSON.stringify(user));
  },
  getUser() {
    return JSON.parse(localStorage.getItem(USER)) || {};
  },
  removeUser() {
    localStorage.removeItem(USER)
  }
};
