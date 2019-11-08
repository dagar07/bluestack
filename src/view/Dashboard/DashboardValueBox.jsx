import React from 'react';
import PropTypes from 'prop-types';
import './Dashboard.css';
import TextIcon from './TextIcon';
import price from '../../assets/images/Price.png'
import csv from '../../assets/images/file.png'
import report from '../../assets/images/statistics-report.png'
import schedule from '../../assets/images/calendar.png'
import autoImg from '../../assets/images/Bitmap.png'

class DashboardValueBox extends React.Component {
  constructor(props) {
    super(props);
    this.handlePopup = this.handlePopup.bind(this);
    this.getCampaignImgUrl = this.getCampaignImgUrl.bind(this);
  }

  componentDidMount() {
    console.log(this.props.data);
  }

  handlePopup() {
    console.log(this.props.data);
  }

  getCampaignImgUrl() {
    return autoImg;
  }

  render() {
    return (
      <div className="valueContainer">
        <div
          className="dashboardContainerTitle flex1"
        >
          <div className="dateFmt">{new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            dateStyle: 'long',
            timeZone: 'UTC',
            timeZoneName: 'short'
          }).format(this.props.data.createdOn)}</div>
          <span className="dateAgo">5 days ago</span>
        </div>
        <div className="dashboardContainerTitle flex2 campaign">
          <img
            className="campaignImg"
            src={this.getCampaignImgUrl()}
            alt={this.props.data.name}
          />
          <div className="campaignNameBox">
            <span className="campignName">{this.props.data.name}</span>
            <span className="campaignRegion">{this.props.data.region}</span>
          </div>
        </div>
        <div className="dashboardContainerTitle flex1 viewPrice">
          <TextIcon icon={price} text="View Price"/>
        </div>
        <div className="dashboardContainerTitle flex2 actions">
          <TextIcon icon={csv} text="CSV"/>
          <TextIcon icon={report} text="Report"/>
          <TextIcon icon={schedule} text="Schedule Again"/>
        </div>
      </div>
    );
  }
}

DashboardValueBox.propsType = {
  data: PropTypes.object
}

export default DashboardValueBox;
