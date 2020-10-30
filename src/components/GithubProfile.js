import React from 'react';
import GithubProfileCard from "./GithubProfileCard";
import GithubProfileDetails from "./GithubProfileDetails";

class GithubProfile extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                        {
                            Object.keys(this.props).length !==0 ?
                                <React.Fragment>
                              <div className="row">
                                  <div className="col-md-3">
                                      <GithubProfileCard userDetails={this.props.userDetails}/>
                                  </div>

                                  <div className="col-md-9">
                                      <GithubProfileDetails userDetails={this.props.userDetails} />
                                  </div>
                              </div>
                                </React.Fragment>
                                : null
                        }

            </React.Fragment>
        );
    }

}

export default GithubProfile;