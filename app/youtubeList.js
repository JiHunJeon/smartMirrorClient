import React from 'react';
import YoutubePlay from './youtubePlay'
import YoutubeItem from './youtubeItem'


export default class YoutubeList extends React.Component{
  constructor(props){
      super(props);
  }

  setPageActivete(type){
        this.props.setPage(type)
  }
  render(){
    const youtubeLists =
        this.props.items.map( (item,index) =>
                      <YoutubeItem item={item} setActiveItem={this.props.setActiveItem} key={index}/>
                   );

           const nextPageList = this.setPageActivete.bind(this,'next')
           const prevPageList = this.setPageActivete.bind(this,'prev')


    return (
      <article>
        <div onClick={nextPageList}>next list</div>
        <div onClick={prevPageList}>prev list</div>
        <ul className="youtubeLists center-block">
          {youtubeLists}
        </ul>
      </article>
    )
  }

}
