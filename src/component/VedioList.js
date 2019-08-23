import React,{Component} from 'react';

class VedioList extends Component{


    render (){
        console.log(this.props.videos);
        const abc = this.props.videos.map(function(data){
            return (<li key={data.etag} className="list-group-item">
                <div className="video-list media">
                    <img className="media-object" src={data.snippet.thumbnails.default.url}></img>
                </div>
                <div>
                    <div>{data.snippet.title}</div>
                    <div>{data.snippet.description}</div>
                </div>
            </li> )
        });
        return (
            <ul>
                {abc}
            </ul>
        )
    }
}

export default VedioList;