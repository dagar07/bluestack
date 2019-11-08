import React from 'react';
import './Tab.css';

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex : 0};
    this.updateTabView = this.updateTabView.bind(this);
    this.getSelectedStyle = this.getSelectedStyle.bind(this);
  }

  updateTabView(index) {
    // update the tab color on change
    this.setState({
      selectedIndex: index
    });
  }

  getSelectedStyle(index) {
    if (this.state.selectedIndex === index) {
      return {
        color: '#84a61a',
        borderBottom: '4px solid #84a61a',
        fontWeight: 500
      }
    }
    return {};
  }

  render() {
    return (
      <div className="tabContainer">
        {this.props.items.map(
          (item, index) => 
          <div
            className="tabHeading"
            style={this.getSelectedStyle(index)}
            key={item}
            onClick={() => {this.updateTabView(index);}}
          >{item}</div>
        )}
      </div>
    );
  }
}

export default Tab;
