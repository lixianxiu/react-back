import * as userAction from '../constant'

export const saveUser = (data) => {
    return {
        type:userAction.SET_USER,
        data
    }
}
export const removeUser = (id) => {
    return {
        type:userAction.REMOVE_USER,
        id
    }
}
