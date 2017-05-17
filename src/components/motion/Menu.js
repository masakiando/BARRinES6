import React, {PropTypes} from 'react';
import {Motion, spring} from 'react-motion';

const Menu = ({
  handleMouseDown, panelOpen
}) => { // a
  return ( //b
    <Motion
      style={{
        x: spring(panelOpen ? 0 : -100),
        opacity: spring(panelOpen ? 1 : 0)
      }}
      >{(currentStyles) => (
          <div
            onClick={handleMouseDown}
            id="flyoutMenu"
            style={{
              transform: `translate3d(${currentStyles.x}%, 0, 0)`,
              opacity: currentStyles.opacity
            }}
          >
            <h2><a href="#">Home</a></h2>
            <h2><a href="#">About</a></h2>
            <h2><a href="#">Contact</a></h2>
            <h2><a href="#">Search</a></h2>
          </div>
       )}
    </Motion>
  ); //b
}; //A

Menu.propTypes = {
  handleMouseDown: PropTypes.func.isRequired,
  panelOpen: PropTypes.object
};

export default Menu;
