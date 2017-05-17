import React, {PropTypes} from 'react';
import {Motion, spring} from 'react-motion';
import MenuButton from './MenuButton';
import Menu from './Menu';
import PageContent from './PageContent';

class MotionPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      panelOpen: false
    };
  }

  render() {
    const { panelOpen } = this.state;

    return (
      <div>
        <MenuButton
          handleMouseDown={
            () => this.setState({
              panelOpen: !panelOpen
            })
          }
        />
        <Menu
          panelOpen={this.state}
          handleMouseDown={
            () => this.setState({
              panelOpen: false
            })
          }
        />
        <PageContent/>
      </div>
    );
  }
}// end

export default MotionPage;
