import React from 'react';
import { render } from 'react-dom';
import Weather from './weather';
import Calendar from './calendar';


require("./common.global.css");


const url ={
  weather: 'http://221.141.3.125:3001/weathers/today'
};

React.render(
     <div className="container">
       <div clasName="row">
          <div className="col-md-6">
                 <div className="weather">
                    <Weather url={url.weather}/>
                  </div>
          </div>
           <div className="col-md-6">
                <div className="date">
                    <Calendar></Calendar>
                </div>
          </div>
        </div>
    </div>,
  
document.getElementById('root')
);