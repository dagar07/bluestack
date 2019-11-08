import React from 'react';
import PropTypes from 'prop-types';
import './Dashboard.css';
import DashboardValueBox from './DashboardValueBox';
import PriceModal from './modal/PriceModal'

class DashboardContainer extends React.Component {

  render() {
    return (
      <div className="dashboardContainerCard">
        <div className="titleContainer">
          <div className="dashboardContainerTitle flex1">DATE</div>
          <div className="dashboardContainerTitle flex2">CAMPAIGN</div>
          <div className="dashboardContainerTitle flex1">VIEW</div>
          <div className="dashboardContainerTitle flex2">ACTIONS</div>
        </div>

        {this.props.data.map(
          (item, index) => <DashboardValueBox data={item} key={index}/>
        )}
        <PriceModal />
      </div>
    );
  }
}

DashboardContainer.propTypes = {
  data: PropTypes.array
}

export default DashboardContainer;
