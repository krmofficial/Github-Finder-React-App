import React from 'react';
import './App.css';
import GithubSearchApp from "./components/GithubSearchApp";

class App extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>

                <nav className="navbar navbar-dark bg-dark text-white">
                    <a href="#" className="navbar-brand">Github Search Application</a>
                </nav>

                <GithubSearchApp/>

            </React.Fragment>
        );
    }

}

export default App;
