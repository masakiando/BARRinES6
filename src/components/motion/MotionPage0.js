import React from 'react';
import PropTypes from 'prop-types';
import {Motion, spring} from 'react-motion';
import MenuOpenButton from './MenuOpenButton';
import MenuPage from './MenuPage';
import TopContentPage from './TopContentPage';

class MotionPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      panelOpen: false
    };
    this.menuClose = this.menuClose.bind(this);
    this.MenuPageOpen = this.MenuPageOpen.bind(this);
  }

  MenuPageOpen() {
    this.setState({panelOpen: !this.state.panelOpen});
  }
  menuClose() {
    this.setState({panelOpen: !this.state.panelOpen});
  }

  render() {
    const { panelOpen } = this.state;

    return (
      <div>
        <MenuOpenButton
          MenuPageOpen={this.MenuPageOpen}
        />
      {panelOpen &&
        <MenuPage
          panelOpen={this.state}
          divDown={this.menuClose}
        />
      }
      <TopContentPage/>
      </div>
    );
  }
}// end

export default MotionPage;
