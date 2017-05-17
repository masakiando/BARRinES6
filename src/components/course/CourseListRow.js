import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CourseListRow = ({
  course,
  onDelete,
  saving
}) => {
    const handleClick = (event) => {
      debugger;
      event.preventDefault();
      onDelete(course.id);
    };
    return (
    <tr>
      <td><a href={course.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
      <td>
        <input
          type="submit"
          disabled={saving}
          value={saving ? '削除中' : '削除'}
          className="btn btn-primary btn-xs"
          onClick={handleClick}/>
      </td>
    </tr>
  );
};

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default CourseListRow;
