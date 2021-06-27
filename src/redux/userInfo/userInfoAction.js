import {USERINFO_FETCH_REQUEST, USERINFO_FETCH_SUCCESS, USERINFO_FETCH_FAILURE} from "./userInfoActionType";
import Axios from "axios";
import {GithubClientId} from "../../components/GithubCredentials";

// Special Function
let fetchUserInfo = (username) => {
    return (dispatch) => {
        dispatch({type : USERINFO_FETCH_REQUEST});
        let dataUrl = `https://api.github.com/users/${username}?clientId=${GithubClientId}`;
        Axios.get(dataUrl).then((response) => {
            dispatch({type : USERINFO_FETCH_SUCCESS, payload : response.data});
        }).catch((error) => {
            dispatch({type : USERINFO_FETCH_FAILURE, payload : error});
        });
    }
};

export {fetchUserInfo};