import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const leftNavStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: 'black',
  height: '100%',
};

const LeftNav = ({ styles }) =>
  <div style={Object.assign({}, leftNavStyles, styles)}>
    <Link to="/cases">Cases</Link><br />
    <Link to="/cases/new">New Case</Link><br />
    <Link to="/cases/edit/1234">Edit Case 1234</Link><br />
  </div>;

LeftNav.propTypes = {
  styles: PropTypes.object,
};

export default LeftNav;
