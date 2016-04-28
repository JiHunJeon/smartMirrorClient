import React from 'react';
import { render } from 'react-dom';
import Weather from './weather';
import Calendar from './calendar';
import Youtube from './Youtube';


require("./common.global.css");


const url ={
  weather: 'http://221.141.3.125:3001/weathers/today',
  youtube: 'http://221.141.3.125:3001/youtube'
};

React.render(
     <div className="container">
       <div className="row">
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
        <div className="row">
          <div className="col-md-12">
              <Youtube url={url.youtube}></Youtube>
          </div>
        </div>
    </div>,

document.getElementById('root')
);
