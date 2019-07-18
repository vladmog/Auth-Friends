import axios from "axios";
import {axiosWithAuth} from '../utils/axiosWithAuth';
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const GET_START = "GET_START";
export const GET_SUCCESS = "GET_SUCCESS";


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
    dispatch ({type: GET_START})
    axiosWithAuth().get('/friends')
    .then(res => {
        console.log("resAdd: ", res)
        dispatch({type: GET_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
    })

    // axiosWithAuth().post('/friends', friend)
    // .then(res => {
    //     console.log("resAdd: ", res)
        
        
        
    // })
    // .catch(err => {
    //     console.log(err)
    
    // })
}
// /================================================================


// export const addFriend = friend => () => {
//     axiosWithAuth().get('/friends')
//     .then(res => {
//         console.log("resAdd: ", res)
        
        
        
//     })
//     .catch(err => {
//         console.log(err)
    
//     })

//     // axiosWithAuth().post('/friends', friend)
//     // .then(res => {
//     //     console.log("resAdd: ", res)
        
        
        
//     // })
//     // .catch(err => {
//     //     console.log(err)
    
//     // })
// }