import React from 'react';
import YoutubePlay from './youtubePlay'
import YoutubeItem from './youtubeItem'

export default class YoutubeList extends React.Component{
  constructor(props){
      super(props);
  }

  activate(type){
    this.props.setUrl(type);
  }

  render(){
    const youtubeLists =
        this.props.items.map( (item, idx) =>
                      <YoutubeItem item={item} setActiveItem={this.props.setActiveItem} key={idx}/>
                   );
                   
    const nextList = ::this.activate.bind(this,"next");
    const prevList = ::this.activate.bind(this,"prev");

    return (
      <article>
        <div onClick={nextList}>next list</div>
        <div onClick={prevList}>prev list</div>
        <ul className="youtubeLists">
          {youtubeLists}
        </ul>
      </article>
    )
  }

}
