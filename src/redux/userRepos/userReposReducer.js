import {REPOS_FETCH_REQUEST, REPOS_FETCH_SUCCESS, REPOS_FETCH_FAILURE} from "./userReposActionType";

export const REPOS_FEATURE_KEY = 'userRepos';

let initialState = {
    loading : false,
    repos : [],
    errorMessage : ''
};

let reposReducer = (state = initialState, action) =>{
    let {type, payload} = action;
    switch (type) {
        case REPOS_FETCH_REQUEST :
            return{
                ...state,
                loading : true
            };
        case REPOS_FETCH_SUCCESS :
            return {
                ...state,
                repos: payload
            };
        case REPOS_FETCH_FAILURE :
            return {
                ...state,
                errorMessage: payload
            };
        default : return state;
    }
};

export {reposReducer};