import React from 'react';


export default class YoutubeList extends React.Component{
  constructor(props){
      super(props);

  }

  handleYoutubeItemList(){
    var ItemList = this.props.data.map( s => console.log(s.length))
  }

  componentDidMount(){
    this.handleYoutubeItemList();
  }

  render(){
    return <h1>test</h1>
  }

}
