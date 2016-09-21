import React, { PropTypes } from 'react';
import TopBar from './top_bar';

const caseLayoutStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  height: '100%',
  width: '100%',
};

const CaseLayout = ({ children }) =>
  <div style={caseLayoutStyles}>
    <TopBar />
    { children }
  </div>;

CaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CaseLayout;
