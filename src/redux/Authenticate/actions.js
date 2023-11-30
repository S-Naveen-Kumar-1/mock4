import axios from "axios"
import { FAILURE, GET_USERDATA_SUCCESS, REQUEST, SIGNUP_SUCCESS } from "./actionType"

export const signUp = (userData) => (dispatch) => {

    dispatch({ type: REQUEST })
    axios.post(`https://mock-4-e9tg.onrender.com/users`, userData)
        .then(res => {
            console.log(res.data)
            dispatch({ type: SIGNUP_SUCCESS })
        })
        .catch((err) => {
            console.log(err)
            dispatch({ type: FAILURE })
        })
}

export const getUserData = () => (dispatch) => {
    dispatch({ type: REQUEST })
    axios.get(`https://mock-4-e9tg.onrender.com/users`,)
        .then(res => {
            console.log(res.data)
            dispatch({ type: GET_USERDATA_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            console.log(err)
            dispatch({ type: FAILURE })
        })
}