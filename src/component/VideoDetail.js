import React from 'react';

const VideoDetail = ({data}) =>{
    if(!data){
        return (<div> Loading ..... </div>);
    }
    const url = `https://www.youtube.com/embed/${data.id.videoId}`;
    return(
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
               <div>{data.snippet.title}</div>
               <div>{data.snippet.description}</div>
            </div>
        </div>
    )

}

export default VideoDetail;