import React from 'react';
import './Dashboard.css';
import Tab from '../../components/Tab/Tab';
import DashboardContainer from './DashBoardContainer';
import json from './data.json';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemTabs: ['Upcoming Campaigns', 'Live Campaigns', 'Past Campaigns'],
      data: json
    }
  }

  componentDidMount() {
    console.log(json);
  }

  render() {
    return (
      <div className="dashboardContainer">
        <div className="dashboardTitle">Manage Compaigns</div>
        <Tab items={this.state.itemTabs} />
        <DashboardContainer data={this.state.data.data}/>
      </div>
    );
  }
}

export default Dashboard;
