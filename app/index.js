import React from 'react';
import { render } from 'react-dom';
import CartItem from "./cartItem";

const order ={
  title: 'Fresh fruits package',
  image: 'http://221.141.3.125:3001/weather/rain.svg',
  initialQty: 3,
  price: 10
};


React.render(
  <CartItem title={order.title}
        image = {order.image}
        initialQty = {order.initialQty}
        price = {order.price}/>,
  
document.getElementById('root')
);