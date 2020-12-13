import * as userAction from "../constant";
const initialUserState = {};
export default function (state = initialUserState, action) {
  switch (action.type) {
    case userAction.SET_USER:
      return (state = action.data);
    case userAction.REMOVE_USER:
      return (state = {});
    default:
      return state;
  }
}
