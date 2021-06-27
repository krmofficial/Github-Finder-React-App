import React from 'react';
import {useSelector} from "react-redux";
import {USERINFO_FEATURE_KEY} from "../redux/userInfo/userInfoReducer";

let GithubProfileDetails = () => {

    let userDetails = useSelector((state) => {
        return state[USERINFO_FEATURE_KEY].userInfo;
    });

    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <span className="badge badge-primary h2 mx-2">{userDetails.followers} Followers</span>
                            <span className="badge badge-success h2 mx-2">{userDetails.public_repos} Repos</span>
                            <span className="badge badge-warning h2 mx-2">{userDetails.public_gists} Gists</span>
                            <span className="badge badge-danger h2 mx-2">{userDetails.following} Following</span>
                        </div>
                    </div>
                    <ul className="list-group">
                        <li className="list-group-item">
                            User Name : {userDetails.name}
                        </li>
                        <li className="list-group-item">
                            Location : {userDetails.location}
                        </li>
                        <li className="list-group-item">
                            Email : {userDetails.email}
                        </li>
                        <li className="list-group-item">
                            Company : {userDetails.company}
                        </li>
                        <li className="list-group-item">
                            Blog : {userDetails.blog}
                        </li>
                        <li className="list-group-item">
                            Mentor : {userDetails.created_at}
                        </li>
                        <li className="list-group-item">
                            Profile Url : {userDetails.url}
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
};

export default GithubProfileDetails;