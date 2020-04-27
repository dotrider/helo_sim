import axios from "axios";

let initialState = {
    user : {
        isLoggin: false
    }
}

const SET_USER = 'SET_USER';
const USER_LOGOUT = 'USER_LOGOUT';
const USER_SESSION = 'USER_SESSION';


export const uSession = () => {
    let user = axios.get('/auth/userSession');
    // console.log('userSess', user)
    return {
        type: USER_SESSION,
        payload: user
    }
}

export const setUser = (obj) => {
    // console.log('action', obj)
    return{
        type: SET_USER,
        payload: obj
    }
}


export const logout = () => {
    // console.log('hit')
    return{
        type: USER_LOGOUT,
        payload: {isLoggin:false}
    }
}


export default function reducer(state = initialState, action){
    const {type, payload} = action;
    // console.log('reducer', action)
    switch(type){
        case SET_USER:
            return {...state, user:{ ...payload, isLoggin: true },};
        case USER_LOGOUT:
            return {...state, user: {isLoggin: false}};
        case USER_SESSION + '_LOADING':
            return {...state, user: {isLoggin: false}};
        case USER_SESSION + '_FULFILLED':
            return {...state, user: {...payload.data, isLoggin: true}};
        case USER_SESSION + '_REJECTED':
            return {...state, user: {isLoggin: false}}         
        default: 
            return state
    }
}