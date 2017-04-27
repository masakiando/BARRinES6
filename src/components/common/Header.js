import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav className="nav nav--center">
      <IndexLink to="/" className="box-link" activeClassName="active">Home</IndexLink>{" | "}
      <Link to="/courses" className="box-link" activeClassName="active">Courses</Link>{" | "}
      <Link to="/workshop-event" className="box-link" activeClassName="active">Workshop Event</Link>{" | "}
      <Link to="/about" className="box-link" activeClassName="active">About</Link>
      <br />{loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
