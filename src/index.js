import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'


const API_KEY = 'AIzaSyDspbD9Gw7mxPFsaYbHFVkyokOGmZeKbTQ';


class App extends Component {

    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'bass guitar'}, (videos) => {
            this.setState({ videos })
        });
    }

    render() {
        return (
            <React.Fragment>
                <SearchBar />
                <VideoList videos={this.state.videos}/>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
