import React from 'react';

class GithubProfileCard extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <img src={this.props.userDetails.avatar_url} className="img-fluid img-thumbnail" alt=""/>
                    <div className="card-body">
                        <span className="h5">{this.props.userDetails.name}</span>
                        <p>{this.props.userDetails.bio}</p>
                        <a href={this.props.userDetails.html_url} className="btn btn-sm btn-success" target="_blank">Profile</a>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default GithubProfileCard;