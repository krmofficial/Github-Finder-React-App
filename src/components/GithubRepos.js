import React from 'react';

class GithubRepos extends React.Component{

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-header">
                        <p className="h4">Your Repositories</p>
                    </div>
                    <div className="card-body">
                       <table className="table table-hover table-striped text-white">
                           <thead>
                                <tr className="bg-dark text-white">
                                    <th>Repository Name</th>
                                    <th>Stars Count</th>
                                    <th>Watcher Count</th>
                                </tr>
                           </thead>
                           <tbody>
                           {
                               this.props.repos.map((repo)=>{
                                   return(
                                       <tr>
                                           <td><a href={repo.html_url} target="_blank">{repo.name}</a></td>
                                           <td><span className="badge badge-primary">{repo.stargazers_count}</span></td>
                                           <td><span className="badge badge-warning">{repo.watchers_count}</span></td>
                                       </tr>
                                   )
                               })
                           }
                           </tbody>
                       </table>
                    </div>
                </div>
            </React.Fragment>
        );
    }


}

export default GithubRepos;

