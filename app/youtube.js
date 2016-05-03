import React from 'react';
import YoutubeList from './youtubeList'
import YoutubePlay from './youtubePlay'
import $ from 'jquery';

const API_KEY = "AIzaSyBPExXnsihvNXQ6Px_kmqipb3bnshlnCCE";
var url = null;

export default class Youtube extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items: null,
      activeItem: 'null',
      url: this.props.url+"?api_key="+API_KEY,
      nextPage: 'null',
      prevPage: 'null',
      keyword: '메이크업'
    }
  }

  loadYoutubeFromServer(url){
    $.ajax({
      url: url,
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


  setUrl(params){
     let url = this.state.url;

     if (params['keyword'] != 'null')
              url += "&keyword="+params['keyword']

     if (typeof(params['pageToken']) !== 'undefined')
              url += "&page="+params['pageToken']

   return url;
  }

  componentWillMount(){
    let url = this.setUrl({keyword: this.state.keyword});
    this.loadYoutubeFromServer(url);
    //setInterval(this.loadYoutubeFromServer.bind(this), 1000);
  }

  setActiveItem(id) {
    this.setState({
      activeItem: id
    });
  }

  setPage(type){
    var pageToken = null;
    if(type == "next")
      pageToken = this.state.nextPage;
    else if(type == "prev")
      pageToken = this.state.prevPage;
    else {
      pageToken = null;
    }
    const url = this.setUrl({keyword: this.state.keyword, pageToken: pageToken})

    this.loadYoutubeFromServer(url);
  }

  render(){

    const container = this.state.activeItem === 'null' ?
    <YoutubeList items={this.state.items} setActiveItem={::this.setActiveItem} setPage={::this.setPage} /> : <YoutubePlay setActiveItem={::this.setActiveItem} videoId={this.state.activeItem} />

     //console.log(container)
    return (
      <div className="youtubeListItem center-block ">
          {container}
      </div>
    )
  }
}
