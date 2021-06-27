import React, {useEffect, useState} from 'react'
import GithubSearch from "./GithubSearch";
import GithubProfile from "./GithubProfile";
import GithubRepos from "./GithubRepos";
import {useSelector} from "react-redux";
import {USER_SEARCH_FEATURE_KEY} from "../redux/user/userReducer";
import {USERINFO_FEATURE_KEY} from "../redux/userInfo/userInfoReducer";
import {REPOS_FEATURE_KEY} from "../redux/userRepos/userReposReducer";

let GithubSearchApp = () => {

    let username = useSelector((state) => {
        return state[USER_SEARCH_FEATURE_KEY].username;
    });

    let userDetails = useSelector((state) => {
        return state[USERINFO_FEATURE_KEY].userInfo;
    });

    let repos = useSelector((state) => {
        return state[REPOS_FEATURE_KEY].repos;
    });

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-secondary text-white">
                                <h2>Github User Search</h2>
                                <h3>Username :- {username}</h3>
                            </div>
                            <div className="card-body">
                                <GithubSearch/>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Github Profile*/}
                {
                    Object.keys(userDetails).length > 0 ? <React.Fragment>
                        <GithubProfile/>
                    </React.Fragment> : null
                }



                {
                    repos.length !== 0 ?
                        <React.Fragment>
                            <GithubRepos/>
                        </React.Fragment>
                        : null
                }
            </div>
        </React.Fragment>
    );
};

export default GithubSearchApp;