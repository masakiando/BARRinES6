import React, {PropTypes} from 'react';
// import WorkshopListRow from './WorkshopListRow';
import {Link} from 'react-router';

const WorkshopList = () => {
  const handleClick = (event) => {
    event.preventDefault();
    // onDelete(course.id);
  };
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Length</th>
        <th>管理</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><a href="#" target="_blank">Watch</a></td>
        <td><Link to="#">title</Link></td>
        <td>authorId</td>
        <td>category</td>
        <td>length</td>
        <td>
          <input
            type="submit"
            disabled=""
            value="削除"
            className="btn btn-primary btn-xs"
            onClick={handleClick}/>
        </td>
      </tr>
      </tbody>
    </table>
  );
};

export default WorkshopList;
