import React from 'react';

function Card(props){
    return  <>
    
      <div className="cards">
        <div className="card">
          <img src={props.imagsrc} alt="pic" className="card_img"></img>
    
        </div>
        <div className="card_info">
        <span className="card_category">{props.title}</span>
        <h3 className="card_title">{props.subtitle}</h3>
        <a href="#">
          <button className="btn">{props.btn}</button>      
        </a>
    
        </div>
    
      </div>
      
      </>
    }
    export default Card;