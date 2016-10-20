import React, { PropTypes } from 'react';
import SideBar from './side_bar';
import TopAppBar from './top_app_bar';

const mainContentAreaStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'flex-start',
  width: '100%',
};

const mainContentBoxStyles = {
  width: '100%',
  maxWidth: '900px',
  minWidth: '300px',
  margin: '10px',
};

const PageLayout = ({ children }) =>
  <div>
    <SideBar />
    <div style={{ marginLeft: '280px' }}>
      <TopAppBar />
      <div style={mainContentAreaStyles}>
        <div style={mainContentBoxStyles}>
          { children }
        </div>
      </div>
    </div>
  </div>;


PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
