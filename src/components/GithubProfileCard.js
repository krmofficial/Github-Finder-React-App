import React from 'react';
import {useSelector} from "react-redux";
import {USERINFO_FEATURE_KEY} from "../redux/userInfo/userInfoReducer";

let GithubProfileCard = () => {

    let userDetails = useSelector((state) => {
        return state[USERINFO_FEATURE_KEY].userInfo;
    });

    return (
        <React.Fragment>
            <div className="card">
                <img src={userDetails.avatar_url} className="img-fluid img-thumbnail" alt=""/>
                <div className="card-body">
                    <span className="h5">{userDetails.name}</span>
                    <p>{userDetails.bio}</p>
                    <a href={userDetails.html_url} className="btn btn-sm btn-success" target="_blank">Profile</a>
                </div>
            </div>
        </React.Fragment>
    );
};

export default GithubProfileCard;