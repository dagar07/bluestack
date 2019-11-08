import React from 'react';
import './Dashboard.css';

function TextIcon(props) {
  return (
    <div className="iconTextBox">
      <img className="iconSize" src={props.icon} alt={props.text} />
      <span className="iconText">{props.text}</span>
    </div>
  );
}

export default TextIcon;
