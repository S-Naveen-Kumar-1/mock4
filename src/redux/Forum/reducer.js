import { FAILURE, GET_QUESTION_SUCCESS, REQUEST } from "./actionType"


const initialState = {

    isLoading: false,
    isError: false,
    allQuestions: []
}
export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case REQUEST: {
            return { ...state, isLoading: true }
        }
        case FAILURE: {
            return { ...state, isLoading: false, isError: true }
        }
        case GET_QUESTION_SUCCESS: {
            console.log(payload, "pay")
            return { ...state, allQuestions: payload }
        }
        default: {
            return state
        }
    }
}