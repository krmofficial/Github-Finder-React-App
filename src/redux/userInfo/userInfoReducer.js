import {USERINFO_FETCH_REQUEST, USERINFO_FETCH_SUCCESS, USERINFO_FETCH_FAILURE} from "./userInfoActionType";

export const USERINFO_FEATURE_KEY = 'userInfo';

let initialState = {
    loading : false,
    userInfo : {},
    errorMessage : ''
};

let userInfoReducer = (state = initialState, action) => {
    let {type, payload} = action;
    switch (type) {
        case USERINFO_FETCH_REQUEST :
            return{
                ...state,
                loading: true
            };
        case USERINFO_FETCH_SUCCESS:
            return{
                ...state,
                userInfo: payload
            };
        case USERINFO_FETCH_FAILURE :
            return {
                ...state,
                errorMessage : payload
            };
        default : return state;

    }
};

export {userInfoReducer};