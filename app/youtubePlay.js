import React from 'react'
import Youtube from 'react-youtube'

export default class YoutubePlay extends React.Component{
  constructor(props){
    super(props);
  }

  activate() {
    this.props.setActiveItem('null')
  }

  render(){
    const opts ={
      width: '800',
      height: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
      }
    };
    return(
      <article>
        <div onClick={::this.activate}>go to list</div>
        <Youtube
          videoId={this.props.videoId}
          opts={opts}
          ></Youtube>
      </article>

    )
  }
}
