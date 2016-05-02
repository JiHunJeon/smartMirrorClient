import React from 'react'

export default class YoutubeItem extends React.Component{
  constructor(props){
      super(props);
  }

  activate() {
    var video_id = this.props.item['video_id']
    //const {item, setActiveItem} = this.props
    this.props.setActiveItem(video_id)
  }

  render(){
    return(
      <li>
        <div className="youtube_item_container" onClick={::this.activate}>
          <div className='center-block item_img'>
            <img src={this.props.item['thumbnail']['url']}></img>
          </div>
          <div className='center-block item_text'>
            <span className='text_font'>{this.props.item['title']}</span>
          </div>
        </div>
      </li>
    )
  }
}
