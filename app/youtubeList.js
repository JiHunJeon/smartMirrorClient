import React from 'react';
import YoutubePlay from './youtubePlay'
import YoutubeItem from './youtubeItem'


export default class YoutubeList extends React.Component{
  constructor(props){
      super(props);
  }

  render(){
<<<<<<< HEAD

    var youtubeLists =
=======
    const youtubeLists =
>>>>>>> origin/master
        this.props.items.map( item =>

                      <YoutubeItem item={item} setActiveItem={this.props.setActiveItem}/>
                   );

    return (
      <ul className="youtubeLists center-block">
        {youtubeLists}
      </ul>
    )
  }

}
