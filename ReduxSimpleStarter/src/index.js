import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAko3_-3qn6Ok5vWN-_FMiIHVIvkqXXZxY';



//Create a new component
class App extends Component {
    constructor(props){
        super(props);

        this.state = { 
            videos: [],
            selecetedVideo: null
        };

        this.videoSearch("react js")
    }
    
    videoSearch = (search) =>{
        YTSearch({key:API_KEY, term: search}, videos=>{
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        })
    }

    render(){

        const videoSearch = _.debounce( (term)=>{this.videoSearch(term)} , 300 );

        return (
            <div className = "back-ground">
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => {
                        this.setState({selectedVideo})
                        console.log(selectedVideo)
                    }}
                    videos={ this.state.videos}
                 />
            </div>
        )
    }
    
}
//take this components gerneated html and put it in the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));