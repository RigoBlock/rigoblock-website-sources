import React, { Component } from 'react';
import { Player } from 'video-react';
import HLSSource from './HLSSource';

export default class Video2 extends React.Component {
  render() {
  return (
    <Player>
      <HLSSource
        isVideoChild
        src="https://youtu.be/60qzimcMRGw"
      />
    </Player>
  );
  }
}
