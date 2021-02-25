// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
  state = {
    errors: [],
    user: null,
    settings: {
        bitrate: 8,
        video: {
        resolution: '1080p'
    }
  }
  }

  changeBitrate = () => {
    this.setState(previousState => {
        return {
          settings: {...previousState.settings,
            bitrate: 12
          }
        }
      }, console.log(this.state))
};


changeResolution = () => {
    this.setState(previousState => {
        let settings = {...previousState.settings}
        settings.video.resolution = '720p'
        return {settings: settings}
    }, console.log(this.state))
};

  render() {
    return (
      <div>
          <button className="bitrate" onClick={this.changeBitrate}>Change Bitrate</button>
          <button className="resolution" onClick={this.changeResolution}>Change Resolution</button>
      </div>
    );
  }
}

export default YouTubeDebugger;