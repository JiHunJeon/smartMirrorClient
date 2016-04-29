import React from 'react'

export default class YoutubeItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <li>
        <div className="youtube_item_container" >
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
