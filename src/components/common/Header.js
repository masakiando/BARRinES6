import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  debugger;
  return (
    <nav className="nav nav--center">
      <IndexLink to="/" className="box-link" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/courses" className="box-link" activeClassName="active">Courses</Link>
      {" | "}
      <Link to="/workshops" className="box-link" activeClassName="active">Workshops</Link>
      {" | "}
      <Link to="/about" className="box-link" activeClassName="active">About</Link>
      {" | "}
      <Link to="/games" className="box-link" activeClassName="active">Games</Link>
      {" | "}
      <Link to="/canvas" className="box-link" activeClassName="active">Canvas</Link>
      {" | "}
      <Link to="/bootstrap" className="box-link" activeClassName="active">Bootstrap</Link>
      {" | "}
      <Link to="/motion" className="box-link" activeClassName="active">Motion</Link>
      {" | "}
      <Link to="/starbucksMenus" className="box-link" activeClassName="active">Starbucks</Link>
      {" | "}
      <Link to="/players" className="box-link" activeClassName="active">Players</Link>
      {" | "}
      <Link to="/trips" className="box-link" activeClassName="active">Trips</Link>
      {" | "}
      <Link to="/CorrelationCoefficient" className="box-link" activeClassName="active">CorrelationCoefficient</Link>

      <br />
      {loading &&<LoadingDots interval={100} dots={20}/>}
      {!loading &&<span>&nbsp;</span>}
    </nav>
  );
};
// {loading && <LoadingDots interval={100} dots={20}/>}
Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
