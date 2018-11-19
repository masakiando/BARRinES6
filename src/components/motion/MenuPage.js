import React from 'react';
import PropTypes from 'prop-types';
import {Motion, spring} from 'react-motion';

var btnstyle = {
  color: "red",
  top: 50,
  left: 0
};

const MenuPage = ({
  divDown, panelOpen
}) => { // a
  return ( //b not Motion!!!!!!!!!
          <div
            onClick={divDown}
            id="flyoutMenu"
            style={btnstyle}
          >
            <h2><a href="#">Top</a></h2>
            <h2><a href="#">About</a></h2>
            <h2><a href="#">Contact</a></h2>
            <h2><a href="#">Search</a></h2>
          </div>
  ); //b
}; //A

MenuPage.propTypes = {
  divDown: PropTypes.func.isRequired,
  panelOpen: PropTypes.object
};

export default MenuPage;
