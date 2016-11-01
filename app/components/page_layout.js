import React, { PropTypes } from 'react';
import SideBar from './side_bar';
import TopAppBar from './top_app_bar';

const style = {
  leftContent: {
    marginLeft: '224px',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
  },
  box: {
    width: '100%',
    minWidth: '900px',
    margin: '10px',
    marginLeft: '30px',
    marginTop: '80px',
  },
  topBar: {
    position: 'fixed',
    width: '100%',
    zIndex: 10,
  },
};


const PageLayout = ({ children }) =>
  <div>
    <TopAppBar style={style.topBar} />
    <SideBar />
    <div style={style.leftContent}>
      <div style={style.container}>
        <div style={style.box}>
          { children }
        </div>
      </div>
    </div>
  </div>;


PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
