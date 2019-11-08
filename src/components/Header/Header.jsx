import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="root">
        <img
          className="imgBox"
          src="https://cdn.iconscout.com/icon/free/png-256/bluestacks-1-569566.png"
          alt="Blue Stack"
        />
        <div className="titleBox">
          <div className="bannerTitle">BlueStacks</div>
          <span className="subTitle">Play Bigger</span>
        </div>
      </div>
    );
  }
}

export default Header;
