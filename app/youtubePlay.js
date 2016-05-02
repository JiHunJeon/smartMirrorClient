import React from 'react'
import Youtube from 'react-youtube'

export default class YoutubePlay extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const opts ={
      height: '390',
      widht: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
      }
    };
    return(
      <Youtube
        videoId={this.props.videoId}
        opts={opts}
        ></Youtube>
    )
  }
}
