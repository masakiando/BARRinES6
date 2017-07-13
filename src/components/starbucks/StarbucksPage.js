import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import MenuList from './MenuList';
import {browserHistory} from 'react-router';
import {bindActionCreators} from 'redux';
import * as starbucksAcions from '../../actions/starbucksAcions';

class StarbucksPage extends React.Component { //class StarbucksPage start
  constructor(props, context) {
    super(props, context);

    this.redirectToAddStarbucksPage = this.redirectToAddStarbucksPage.bind(this);
    this.deleteMenu = this.deleteMenu.bind(this);
  }

  // menuRow() {}

  deleteMenu(menuId) {
    debugger;
    this.props.actions.deleteGame(menuId);
  }

  redirectToAddStarbucksPage() {
    browserHistory.push('/starbucks');
  }

  render() {
    const {menus} = this.props;

    return (
      <div>
        <h1>Menu</h1>
        <input
          type="submit"
          value="Add Menu"
          className="btn btn-primary"
          onClick={this.redirectToAddStarbucksPage}
        />

        <MenuList
          menus={menus}
          onDelete={this.deleteMenu}
        />
      </div>
    );
  }
} // class StarbucksPage end

StarbucksPage.propTypes = {
  menus: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    menus: state.menus
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(starbucksAcions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StarbucksPage);
