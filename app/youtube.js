import React from 'react';
import YoutubeList from './youtubeList'
import YoutubePlay from './youtubePlay'
import $ from 'jquery';


export default class Youtube extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items: null,
      activeItem: null
    }
  }

  loadYoutubeFromServer(){
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: (data) => {
        this.setState({
          items: data['items']
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

  handlerClick(id = null){
      this.setState({
        activeItem: id
      });
  }

  render(){
    const container = this.state.activeItem !== 'null' ?
    <YoutubeList items={this.state.items} onClick={() => {this.handlerClick()}}/> : <YoutubePlay item={this.state.activeItem} />

    return (
      <div className="youtubeListItem">
        <div className="center-block">
          {container}
        </div>
      </div>
    )
  }
}
