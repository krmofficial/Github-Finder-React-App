import React from 'react';

class GithubProfileDetails extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <span className="badge badge-primary h2 mx-2">{this.props.userDetails.followers} Followers</span>
                                <span className="badge badge-success h2 mx-2">{this.props.userDetails.public_repos} Repos</span>
                                <span className="badge badge-warning h2 mx-2">{this.props.userDetails.public_gists} Gists</span>
                                <span className="badge badge-danger h2 mx-2">{this.props.userDetails.following} Following</span>
                            </div>
                        </div>
                        <ul className="list-group">
                            <li className="list-group-item">
                                User Name : {this.props.userDetails.name}
                            </li>
                            <li className="list-group-item">
                                Location : {this.props.userDetails.location}
                            </li>
                            <li className="list-group-item">
                                Email : {this.props.userDetails.email}
                            </li>
                            <li className="list-group-item">
                                Company : {this.props.userDetails.company}
                            </li>
                            <li className="list-group-item">
                                Blog : {this.props.userDetails.blog}
                            </li>
                            <li className="list-group-item">
                                Mentor : {this.props.userDetails.created_at}
                            </li>
                            <li className="list-group-item">
                                Profile Url : {this.props.userDetails.url}
                            </li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default GithubProfileDetails;