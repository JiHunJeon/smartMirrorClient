import React from 'react';
import YoutubePlay from './youtubePlay'
import YoutubeItem from './youtubeItem'


export default class YoutubeList extends React.Component{
  constructor(props){
      super(props);
  }

  render(){

    var boundClick = null;
    console.log(this.props.items);

    var youtubeLists =
        this.props.items.map(item =>
                      <YoutubeItem item={item}/>
                   );
    return (
      <ul className="youtubeLists center-block">
        {youtubeLists}
      </ul>
    )
  }

}
