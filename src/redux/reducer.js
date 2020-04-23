let initialState = {
    user : {
        isLoggin: false
    }
}

const SET_USER = 'SET_USER'
const USER_LOGOUT = 'USER_LOGOUT';

export const setUser = (obj) => {
    return{
        type: SET_USER,
        payload: obj
    }
}


export const userLogout = () => {
    return{
        type: USER_LOGOUT,
        payload: {isLoggin:false}
    }
}


export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case SET_USER:
            return {...state, user:{ ...payload, isLoggin: true },}
        case USER_LOGOUT:
            return {...state, user: {isLoggin:false}}
        default:
            return state
    }
}