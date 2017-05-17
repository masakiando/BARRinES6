import React, {PropTypes} from 'react';

const MenuButton = ({
  handleMouseDown
}) => {
  return (
    <button
      id="roundButton"
      onClick={handleMouseDown}>
    </button>
  );
};

MenuButton.propTypes = {
  handleMouseDown: PropTypes.func.isRequired
};

export default MenuButton;
