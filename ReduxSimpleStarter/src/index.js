import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'

const API_KEY = 'AIzaSyAko3_-3qn6Ok5vWN-_FMiIHVIvkqXXZxY';



//Create a new component
class App extends Component {
    constructor(props){
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'react js'}, (videos) => {
            this.setState({ videos })
        })
    }
    render(){
        return (
            <div>
                <SearchBar />
                <VideoList  videos={ this.state.videos}/>
            </div>
        )
    }
    
}
//take this components gerneated html and put it in the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));