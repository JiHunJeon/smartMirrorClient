import React from 'react';

import $ from 'jquery';

export default class Weather extends React.Component {

    constructor(props){
        super(props);
          this.state = {
              weather_state: null,
              image: null,
              temperature: null,
              hour: null,
              time: null,
          };
    }

    loadWeatherFromServer() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: (data) => {
                this.setState({
                    weather_state: data[0]['state'],
                    image: "http://221.141.3.125:3001/weather/"+data[0]['image'],
                    temperature: data[0]['temp'],
                    hour: data[0]['hour'],
                    address: data[0]['area']['address']
                });
            },
            error: (chr, status, err) => {
                console.error(this.props.url, status, err.toString());
            }
        });
    }

    componentDidMount(){
        this.loadWeatherFromServer();
        setInterval(this.loadWeatherFromServer.bind(this), 3600000);
    }

    render() {
        return <article className="weather_container">
                <img className="weather_img" src={this.state.image} width={150} height={150}/>
                <span className="text state text_font">{this.state.weather_state}</span>
                <h1 className="text text_font" >{this.state.temperature}℃ {this.state.hour}시 기준</h1>
                <h1 className="address text_font" >{this.state.address}</h1>

            </article>;
    }

}
