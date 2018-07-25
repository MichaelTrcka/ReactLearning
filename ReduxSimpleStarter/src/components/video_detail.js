import React from 'react';

//since the call is asynchronous it would throw an error if there wasnt a fallback
const VideoDetail = ({video}) => {
if(!video){
    return <div>Loading...</div>
}

const videoId = video.id.videoId;
const url = `http://www.youtube.com/embed/${videoId}`;

    return(
        <div className = "video-detail col-md-8">
            <div className = "embed-responsive embed-responsive-16by9">
            <iframe src={url} className="embed-responsive-item"></iframe>
            </div>
            <div className= "details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
}

export default VideoDetail;