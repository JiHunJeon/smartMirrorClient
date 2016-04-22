import React from 'react';
import { render } from 'react-dom';
import Weather from './weather';


require("./common.global.css");


const url ={
  weather: 'http://221.141.3.125:3001/weathers/today'
};

React.render(
  <Weather url={url.weather}/>,
  
document.getElementById('root')
);