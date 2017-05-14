import React from 'react';
import {Link} from 'react-router';


class AboutPage extends React.Component {

  render() {
    const component = (
      <div
        className="jumbotron jumbotron-fulid text-xs-center">
        <h1>Pluralsight Administration</h1>
        <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
    return (
      <div className="navbar-collapse">
        {component}
      </div>
    );
  }
}

export default AboutPage;
