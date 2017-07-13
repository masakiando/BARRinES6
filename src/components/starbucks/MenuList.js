import React, { PropTypes } from 'react';
import MenuListRow from './MenuListRow';

const MenuList = ({
  menus, onDelete
}) => { // List start
  return (
    <table className="table">
      <thead>
      <tr>
        <th>productName</th>
        <th>category</th>
        <th>short</th>
        <th>tall</th>
        <th>grande</th>
        <th>venti</th>
        <th>manage</th>
      </tr>
      </thead>
      <tbody>
      {menus.map(menu =>
        <MenuListRow
          key={menu._id}
          menu={menu}
          onDelete={onDelete}
        />
      )}
      </tbody>
    </table>
  );
}; // LIst end

MenuList.propTypes = {
  menus: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default MenuList;
