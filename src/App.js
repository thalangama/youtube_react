import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyD5nWB3Kp_iUcuSA4bVi563FR1OgGRtIyQ';

class App  extends Component {

    constructor(props){
        super(props);
        this.state = {videos : []};

        YTSearch({
            key: API_KEY,
            term: 'surfboard'
        }, function (data) {
            this.setState({videos:data});
        });
    }

    render() {
        
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
