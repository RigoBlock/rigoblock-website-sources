import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './Video3.scss'

export default class Video3 extends React.Component {
  render () {
    return (
      <div className='padding-space'>
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=Nua3gVNOaeM'
            width='100%'
            height='100%'
          />
        </div>
      </div>
    )
  }
}
