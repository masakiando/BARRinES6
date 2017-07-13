import React, { PropTypes } from 'react';
import {Link} from 'react-router';

const MenuListRow = ({
  menu, onDelete
}) => { // MenuListRow start
  const handleClick = (e) => {
    e.preventDefault();
    onDelete(menu._id);
  };
  return (
     <tr>
       <td>
         <Link to={`/starbucks/${menu._id}`}>
           {menu.productName}
         </Link>
       </td>
       <td>{menu.category}</td>
       <td>{menu.shortSizePrice}</td>
       <td>{menu.tallSizePrice}</td>
       <td>{menu.grandeSizePrice}</td>
       <td>{menu.ventiSizePrice}</td>
       <td>
       <input
          type="submit"
          className="btn btn-primary btn-xs"
          onClick={handleClick}
          value="Delete"
        />
       </td>
     </tr>
  );
}; // MenuListRow end

MenuListRow.propTypes = {
  menu: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default MenuListRow;
