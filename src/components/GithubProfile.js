import React, {useEffect} from 'react';
import GithubProfileCard from "./GithubProfileCard";
import GithubProfileDetails from "./GithubProfileDetails";

let GithubProfile = () => {
    return (
        <React.Fragment>
            {/*<h2>{JSON.stringify(userInfo)}</h2>*/}

                        <div className="row">
                            <div className="col-md-3">
                                <GithubProfileCard/>
                            </div>

                            <div className="col-md-9">
                                <GithubProfileDetails/>
                            </div>
                        </div>

        </React.Fragment>
    );
};

export default GithubProfile;