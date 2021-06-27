import {USER_SEARCH} from "./userActionType";

export const USER_SEARCH_FEATURE_KEY = 'user'

let initialState = {
    username : ''
};

let userReducer = (state = initialState, action) => {
    let {type, payload} = action;
    switch (type) {
        case USER_SEARCH :
            return{
                username : payload
            };
        default : return state;
    }
};

export {userReducer};