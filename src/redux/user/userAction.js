import {USER_SEARCH} from "./userActionType";

let userSearch = (username) => {
    return{
        type : USER_SEARCH,
        payload : username
    }
};

export {userSearch};