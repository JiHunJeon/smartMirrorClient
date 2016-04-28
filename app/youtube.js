import React from 'react';
import YoutubeList from './youtubeList'
import $ from 'jquery';

export default class Youtube extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items: null
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
  }

  render(){
    return <div><YoutubeList data={this.state.items}></YoutubeList></div>
  }
}
