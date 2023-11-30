import { FAILURE, GET_USERDATA_SUCCESS, REQUEST, USER_LOGGEDIN } from "./actionType"

const initialState = {

    isLoading: false,
    isError: false,
    userData: [],
    user: {},
    isAUth: false
}
export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case REQUEST: {
            return { ...state, isLoading: true }
        }
        case FAILURE: {
            return { ...state, isLoading: false, isError: true }
        }
        case GET_USERDATA_SUCCESS: {
            return { ...state, userData: payload }
        }
        case USER_LOGGEDIN: {
            return { ...state, user: payload, isAUth: true }
        }
        default: {
            return state
        }
    }
}