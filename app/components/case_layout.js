import React, { PropTypes } from 'react';
import TopAppBar from './top_app_bar';

const caseLayoutStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  height: '100%',
  width: '100%',
};

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

const CaseLayout = ({ children }) =>
  <div style={caseLayoutStyles}>
    <TopAppBar />
    <div style={mainContentAreaStyles}>
      <div style={mainContentBoxStyles}>
        { children }
      </div>
    </div>
  </div>;

CaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CaseLayout;
