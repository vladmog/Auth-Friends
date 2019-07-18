import axios from "axios";
import {axiosWithAuth} from '../utils/axiosWithAuth';
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const GET_START = "GET_START";
export const GET_SUCCESS = "GET_SUCCESS";
export const POST_START = "POST_START";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_ERR = "POST_ERR";




export const login = creds => dispatch => {
    dispatch ({type: LOGIN_START})
    return axios.post('http://localhost:5000/api/login', creds)
    .then(res => {
        console.log("resLogin: ", res)
        localStorage.setItem('token', res.data.payload)
        dispatch({
            type: LOGIN_SUCCESS, 
            payload: res.data
        })
        return true
    })
    .catch(err => {
        console.log("err: ", err)
        dispatch ({
            type: LOGIN_FAILURE,
            payload: err.response
        })
        return false
    })
}

export const getFriends = () => (dispatch) => {
    console.log("Get start")
    dispatch ({type: GET_START})
    axiosWithAuth().get('/friends')
        .then(res => {
            console.log("resAdd: ", res)
            dispatch({type: GET_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log("GET ERR:",err)
        })

}

export const addFriend = (values) => (dispatch) => {
    console.log("Post start")
    dispatch ({type: POST_START})
    axiosWithAuth().post('/friends', values)
        .then(res => {
            console.log(res)
            dispatch({type: POST_SUCCESS})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: POST_ERR})
        })
}