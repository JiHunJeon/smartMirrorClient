import React from 'react';
import YoutubeList from './youtubeList'
import YoutubePlay from './youtubePlay'
import $ from 'jquery';


export default class Youtube extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items: null,
<<<<<<< HEAD
      activeItem: 'null'
=======
      activeItem: "null"
>>>>>>> origin/master
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

  setActiveItem(id) {

        console.log(id)
    this.setState({
      activeItem: id
    })();

    console.log(this.state.activeItem)

  }

  render(){
<<<<<<< HEAD
    const container = this.state.activeItem === 'null' ?
=======

    // console.log(this.state.activeItem)
    const container = this.state.activeItem === "null" ? 
>>>>>>> origin/master
    <YoutubeList items={this.state.items} setActiveItem={::this.setActiveItem} /> : <YoutubePlay item={this.state.activeItem} />

     //console.log(container)
    return (
      <div className="youtubeListItem">
        <div className="center-block">
          {container}
        </div>
      </div>
    )
  }
}
