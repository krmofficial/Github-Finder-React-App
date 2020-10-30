import React from 'react';

class GithubSearch extends React.Component{

    constructor(props) {
        super(props);
       this.state = {
           username : ''
       }
    }


    updateInput = (event)=>{
        this.setState({
            username : event.target.value
        });
    };

    submitUsername = (event) => {
        event.preventDefault();
        this.props.pushUsername(this.state.username);
    };

    render() {
        return (
            <React.Fragment>
                <form action="" className="form-inline" onSubmit={this.submitUsername}>
                    <div className="form-group">
                        <input size="40"
                               onChange={this.updateInput}
                               type="text" placeholder="Enter Github User" className="form-control"/>
                    </div>
                    <button className="btn btn-secondary">Search</button>
                </form>
            </React.Fragment>
        );
    }


}

export default GithubSearch;