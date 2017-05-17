import React  from 'react';
import PropTypes from 'prop-types';

const MenuOpenButton = ({
  MenuPageOpen
}) => {
  return (
    <button
      id="roundButton"
      onClick={MenuPageOpen}>
    </button>
  );
};

MenuOpenButton.propTypes = {
  MenuPageOpen: PropTypes.func.isRequired
};

export default MenuOpenButton;
