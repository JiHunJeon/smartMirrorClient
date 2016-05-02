import React from 'react';
import YoutubeList from './youtubeList'
import YoutubePlay from './youtubePlay'
import $ from 'jquery';

  const API_KEY = 'AIzaSyBPExXnsihvNXQ6Px_kmqipb3bnshlnCCE';

export default class Youtube extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      items: null,
      activeItem: "null",
      url: this.props.url+"?api_key="+API_KEY,
      nextPage: null,
      prevPage: null,
    }
  }

  loadYoutubeFromServer(){
    $.ajax({
      url: this.state.url,
      dataType: 'json',
      success: (data) => {
        this.setState({
          items: data['items'],
          nextPage: data['nextPageToken'],
          prevPage: data['prevPageToken']
        });
      },
      error: (chr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }

  componentWillMount(){
    this.loadYoutubeFromServer();
    //setInterval(this.loadYoutubeFromServer.bind(this), 1000);
  }

  setActiveItem(id) {
    this.setState({
      activeItem: id
    });
  }

  parsingParams() {

  }

  setUrl(type){
    var pageToken = '';

    if (type == "next"){
       pageToken = this.state.nextPage
    }
    else if (type == "prev"){
          pageToken = this.state.prevPage
    }

    this.setState({
      url: this.props.url+"?api_key="+API_KEY+"&page="+pageToken
    });

    setTimeout(this.loadYoutubeFromServer.bind(this),100);
  }

  render(){
    const container = this.state.activeItem === "null" ?
    <YoutubeList items={this.state.items} setUrl={::this.setUrl} setActiveItem={::this.setActiveItem} /> : <YoutubePlay videoId={this.state.activeItem} setActiveItem={::this.setActiveItem}/>

  return (
      <div className="center-block youtubeListItem">
          {container}
      </div>
    )
  }
}
