import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sdata from './Sdata';
import Card from './Card';

const App = () => (
            <>
        <div className="header">  <h1  className="heading">😃This is Card 😀</h1></div>
        <div className="card-main">
        {Sdata.map((val) => {
            return(
        <Card
        imagsrc = {val.imagsrc}
          title= {val.title}
          subtitle = {val.subtitle}
          btn = {val.btn}/> );
       }) }
        </div>
     </>
);

export default App; 