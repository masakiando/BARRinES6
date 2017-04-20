import React from 'react';
import {Link} from 'react-router';
import FlashMessagesList from '../flash/FlashMessagesList';

class HomePage extends React.Component {
  render() {
    debugger;
    return (
      <div className="jumbotron">
        <FlashMessagesList />
        <h1>Pluralsight Administration</h1>
        <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
