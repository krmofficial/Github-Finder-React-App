import {combineReducers} from "redux";
import {USER_SEARCH_FEATURE_KEY, userReducer} from "./user/userReducer";
import {userInfoReducer, USERINFO_FEATURE_KEY} from "./userInfo/userInfoReducer";
import {REPOS_FEATURE_KEY, reposReducer} from "./userRepos/userReposReducer";

let rootReducer = combineReducers({
    [USER_SEARCH_FEATURE_KEY] : userReducer,
    [USERINFO_FEATURE_KEY] : userInfoReducer,
    [REPOS_FEATURE_KEY] : reposReducer
});

export{rootReducer};