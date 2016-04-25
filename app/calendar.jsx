import React from 'react';

export default class Calendar extends React.Component {

    constructor(props){
        super(props);
          this.state = {
              time: (new Date()).toLocaleTimeString(),
              date: null
          };
    }
    
    getTime(){
        var options = {
            weekday: "long", year: "numeric", month: "short",
            day: "numeric"
        };
        
       var currentTime = new Date();
        
          this.setState({
              date: currentTime.toLocaleDateString("ko-kr", options),
              time: currentTime.toLocaleTimeString("en-US")
          }); 
    }

    componentDidMount(){
       this.timer =  setInterval(this.getTime.bind(this), 1000);
    }
    
    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render() {
        return <article className="calendar_container">
                    <div className="calendar">
                        <h1 className="date text_font">{this.state.date}</h1>
                        <h1 className="clock text_font">{this.state.time}</h1>
                    </div>
            </article>;
    }
    
}

