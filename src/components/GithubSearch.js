import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {userSearch} from "../redux/user/userAction";
import {fetchUserInfo} from "../redux/userInfo/userInfoAction";
import {fetchRepos} from "../redux/userRepos/userReposAction";

let GithubSearch = () => {

    let dispatch = useDispatch();

    let [user, setUser] = useState('');

    let updateInput = (event)=>{
        setUser(event.target.value);
    };

    let submitUsername = (event) => {
        event.preventDefault();
        dispatch(userSearch(user));
        dispatch(fetchUserInfo(user));
        dispatch(fetchRepos(user));
    };

    return (
        <React.Fragment>
            <form action="" className="form-inline" onSubmit={submitUsername}>
                <div className="form-group">
                    <input size="40"
                           onChange={updateInput}
                           type="text" placeholder="Enter Github User" className="form-control"/>
                </div>
                {/*<h2>{user}</h2>*/}
                <button className="btn btn-secondary">Search</button>
            </form>
        </React.Fragment>
    );
};

export default GithubSearch;