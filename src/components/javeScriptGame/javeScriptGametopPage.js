import React, {PropTypes} from 'react';
import Speed0 from './speed0';
import Speed1 from './speed1';

class javeScriptGametopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "javeScriptGametopPage"
    };
  }

  render() {
    return (
      <div className="javeScriptGametopPage">
        <h1>{this.state.title}</h1>
        <Speed0 />
        <Speed1 />
      </div>
    );
  }
}

export default javeScriptGametopPage;
