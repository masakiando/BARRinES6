import React from 'react';
import {Link} from 'react-router';
// import { Button } from '@salesforce/design-system-react';
import { Button, Menu, MenuItem, MenuDivider, Popover, Position } from "@blueprintjs/core";

const menu = (
    <Menu>
        <MenuItem text="New" />
        <MenuItem text="Open" />
        <MenuItem text="Save" />
        <MenuDivider />
        <MenuItem text="Settings..." />
    </Menu>
);

class AboutPage extends React.Component {

  render() {
    const component = (
      <div
        className="jumbotron jumbotron-fulid text-xs-center">
        <h1>AboutPage</h1>
        <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
        {/*<Button label="Hello Button" />*/}
        <Popover content={menu} position={Position.BOTTOM}>
            <Button text="Actions" />
        </Popover>
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
