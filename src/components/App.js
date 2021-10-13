import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../APIs/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { 
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.onSearchSubmit('puppies');
  }

  onSearchSubmit = async value => {
    const response = await youtube.get('/search', { 
      params: { q: value }
    });
    // console.log(response);
    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  }

  onSelectVideo = (video) => {
    this.setState({ 
      selectedVideo: video
    });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar searchSubmit={ this.onSearchSubmit } />
        <div className="ui stackable grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={ this.state.selectedVideo }/>
            </div>
            <div className="five wide column">
              <VideoList onSelectVideo={ this.onSelectVideo } videos={ this.state.videos } />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;