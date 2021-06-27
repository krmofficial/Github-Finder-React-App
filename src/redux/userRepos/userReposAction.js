import {REPOS_FETCH_REQUEST, REPOS_FETCH_SUCCESS, REPOS_FETCH_FAILURE} from "./userReposActionType";
import Axios from "axios";
import {GithubClientId, GithubClientSecret} from '../../components/GithubCredentials';

// special function
let fetchRepos = (username) => {
    return (dispatch) => {
        dispatch({type : REPOS_FETCH_REQUEST});
        let dataURL = `http://api.github.com/users/${username}/repos?clientId=${GithubClientId}&clientSecret=${GithubClientSecret}`;
        Axios.get(dataURL).then((response) => {
            dispatch({type : REPOS_FETCH_SUCCESS, payload : response.data});
        }).catch((error) => {
            dispatch({type : REPOS_FETCH_FAILURE, payload: error});
        });
    }
};

export {fetchRepos}