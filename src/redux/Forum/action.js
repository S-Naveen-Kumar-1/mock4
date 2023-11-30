import { GET_QUESTION_SUCCESS, POST_ANSWER_SUCCESS, POST_QUESTION_SUCCESS, REQUEST } from "./actionType"
import axios from "axios"

export const postQuestion = (data) => (dispatch) => {
    dispatch({ type: REQUEST })
    axios.post(`https://mock-4-e9tg.onrender.com/forum`, data)
        .then(res => {
            console.log(res.data)
            dispatch({ type: POST_QUESTION_SUCCESS, payload: res.data })
        })
}
export const getAllQuestions = () => (dispatch) => {
    dispatch({ type: REQUEST })
    axios.get(`https://mock-4-e9tg.onrender.com/forum`,)
        .then(res => {
            console.log(res.data)
            dispatch({ type: GET_QUESTION_SUCCESS, payload: res.data })
        })
}
export const answerQuestions = (id, data) => (dispatch) => {
    dispatch({ type: REQUEST })
    axios.put(`https://mock-4-e9tg.onrender.com/forum/${id}`, data)
        .then(res => {
            console.log(res.data, "anser array")
            dispatch({ type: POST_ANSWER_SUCCESS, payload: res.data })
        })
}