import React from 'react';
import './App.css';
import GithubSearchApp from "./components/GithubSearchApp";
import {Provider} from "react-redux";
import {store} from './redux/store';

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

                <Provider store={store}>
                    <GithubSearchApp/>
                </Provider>

            </React.Fragment>
        );
    }

}

export default App;
