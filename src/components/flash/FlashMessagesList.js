import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import FlashMessagesRow from './FlashMessagesRow';
import { deleteFlashMessage } from '../../actions/flashMessagesActions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../../styles/transition.css';

class FlashMessagesList extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const message = this.props.messages.map(message =>
      <FlashMessagesRow
        key={message.id}
        message={message}
        deleteFlashMessage={this.props.deleteFlashMessage}
      />
    );
    debugger;
    return (
      <ReactCSSTransitionGroup
        transitionName = "example"
        transitionEnterTimeout = {500}
        transitionLeaveTimeout = {500}>
      {message}
      </ReactCSSTransitionGroup>
    );
  }
}

FlashMessagesList.propTypes = {
  messages: PropTypes.array.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  debugger;
  return {
    //下記がPropになる
    messages: state.flashMessages
  };
}

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessagesList);
