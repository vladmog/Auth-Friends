import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, GET_START, GET_SUCCESS, POST_START, POST_SUCCESS, POST_ERR} from '../actions/actions';




let defaultState = {
    deletingFriend: false,
    fetchingFriends: false,
    friends: [],
    loggingIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: null
}

export default function reducer (state = defaultState, action){
    switch(action.type){
        case LOGIN_START:
            return {
                ...state,
                fetchingFriends: true,
                loggingIn: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                fetchingFriends: false,
                friends: [],
                loggingIn: false,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                fetchingFriends: false,
                loggingIn: false,
                error: action.payload
            }
        case GET_START:
            return {
                ...state,
                deletingFriend: false,
                fetchingFriends: true,
                friends: [],
                loggingIn: false,
                savingFriends: false,
                updatingFriend: false,
                error: null
            }
        case GET_SUCCESS:
            return {
                ...state,
                deletingFriend: false,
                fetchingFriends: false,
                friends: action.payload,
                loggingIn: false,
                savingFriends: false,
                updatingFriend: false,
                error: null
            }

           
        case POST_START:
            return{
                ...state,
                // deletingFriend: false,
                // fetchingFriends: true,
                // friends: action.payload,
                // loggingIn: false,
                // savingFriends: false,
                // updatingFriend: false,
                // error: null
            }
        case POST_SUCCESS:
            return {
                ...state,
                // deletingFriend: false,
                // fetchingFriends: false,
                friends: action.payload,
                // loggingIn: false,
                // savingFriends: false,
                // updatingFriend: false,
                // error: null
            }
        case POST_ERR:
            return {
                ...state,

            }
        default: return state
    }
}