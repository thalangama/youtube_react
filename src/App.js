import React,{Component} from 'react';
import './App.css';
import YTSearch from 'youtube-api-search';
import API_KEY from './private';
import SearchList from "./component/SearchList";
import VedioList from './component/VedioList';
import VideoDetail from './component/VideoDetail';

// console.log( API_KEY );
// const API_KEY = 'AIzaSyA0Ot-u-L4IXyRzS2SibTSznLOZ3ubF7nE';
class App  extends Component {

    constructor(props){
        super(props);
        this.state = {videos : []};
        let that = this;
        YTSearch({
            key: API_KEY,
            term: 'surfboard'
        }, function (data) {
            that.setState({videos:data});
        });
    }

    render() {
        return (
            <div>
                <SearchList/>
                <VideoDetail data={this.state.videos[0]} />
                <VedioList videos={this.state.videos} />
            </div>
        );
    }
}

export default App;
