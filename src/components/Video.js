import React from 'react';
import YouTube from 'react-youtube';
import './Video3.scss'

export default class Video extends React.Component {
  render() {
    const opts = {
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        cc_load_policy: 0,
        iv_load_policy: 3,
        controls: 0,
        loop: 1,
        rel:0,
        color: 'white',
        playsinline: 0,
        showinfo: 0,
        modestbranding: 1,
        disablekb: 1
      }
    };

    return (
      <div className='padding-space'>
      <div className='player-wrapper'>
      <YouTube
        className='react-player'
        videoId="Nua3gVNOaeM"
        opts={opts}
        onReady={this._onReady}
        width='100%'
        height='100%'
      />
      </div>
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
