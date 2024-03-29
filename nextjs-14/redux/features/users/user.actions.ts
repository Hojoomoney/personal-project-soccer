import {createAction, handleAction} from "redux-actions"

export const userConstants = {
    USER_REQUEST : 'USER_REQUEST',
    USER_SUCCESS : 'USER_SUCCESS',
    USER_FAILURE : 'USER_FAILURE',

}

export const getUserSuccess = createAction(userConstants.USER_SUCCESS)

