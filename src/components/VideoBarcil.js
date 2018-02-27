import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './VideoBarcil.scss'

export default class VideoBarcil extends React.Component {
  render () {
    return (
      <div>
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=9g8tfSWXsgg'
            width='100%'
            height='100%'
          />
        </div>
      </div>
    )
  }
}
