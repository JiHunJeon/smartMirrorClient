import React from 'react';

export default class Timer extends React.Component {

    constructor(props){
        super(props);
          this.state = {
              time: (new Date()).toLocaleTimeString()
          };
    }
    
    getTime(){
       var currentTime = new Date();
        console.log("1");
          this.setState({
              time: currentTime.toLocaleTimeString()
          }); 
    }

    componentDidMount(){
       this.timer =  setInterval(this.getTime.bind(this), 1000);
    }
    
    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render() {
        return <h1 className="text">{this.state.time}</h1>
    }
    
}

