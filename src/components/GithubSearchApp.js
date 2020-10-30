import React from 'react'
import GithubSearch from "./GithubSearch";
import Axios from "axios";
import {GithubClientId} from './GithubCredentials';
import GithubProfile from "./GithubProfile";
import GithubRepos from "./GithubRepos";

class GithubSearchApp extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            username : '',
            userInfo : {},
            repos : [],
            error : null
        }
    }

    pullUserName = (username)=>{
        this.setState({
            username : username
        });

        this.getUserInfo();
        this.getRepos();

    };

    getUserInfo = () => {
       let dataUrl = `https://api.github.com/users/${this.state.username}?clientId=${GithubClientId}`;
       Axios.get(dataUrl).then((response)=>{
            this.setState({
                userInfo : response.data
            });
       }).catch((err)=>{
            this.setState({
                error : err
            });
       });
    };

    getRepos = ()=> {
        let dataUrl = `https://api.github.com/users/${this.state.username}/repos?clientId=${GithubClientId}`;
        Axios.get(dataUrl).then((response)=>{
            this.setState({
                repos : response.data
            });
        }).catch((err)=>{
            this.setState({
                error : err
            });
        });
    };



    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-secondary text-white">
                                    <h2>Github User Search</h2>
                                </div>
                                <div className="card-body">
                                    <GithubSearch pushUsername={this.pullUserName} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Github Profile*/}
                    {
                        Object.keys(this.state.username).length !== 0 ?
                            <React.Fragment>
                                <GithubProfile userDetails={this.state.userInfo}/>
                            </React.Fragment>
                            : null
                    }
                    {
                        this.state.repos.length !== 0 ?
                            <React.Fragment>
                                <GithubRepos repos={this.state.repos}/>
                            </React.Fragment>
                            : null
                    }


                </div>
            </React.Fragment>
        );
    }

}

export default GithubSearchApp;