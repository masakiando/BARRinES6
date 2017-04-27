import React, {PropTypes} from 'react';
import classnames from 'classnames';

class FlashMessagesRow extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onClose = this.onClose.bind(this);
  }
  //Mount後遅延でmessage close
  componentDidMount() {
    this.timer = setTimeout(
      this.onClose,
      this.props.timeout
    );
  }
  // setTimeoutの設定解除
  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  onClose() {
    this.props.deleteFlashMessage(this.props.message.id);
    debugger;
  }

  render() {
    debugger;
    const { id, type, text } = this.props.message;
    return (
      <div className={classnames('alert', {
        'alert-success': type === 'success',
        'alert-danger': type === 'error'
      })}>
        <button
          onClick={this.onClose}
          className="close"><span>&times;</span></button>
        {text}
      </div>
    );
  }
}

FlashMessagesRow.propTypes = {
  message: PropTypes.object.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired,
  timeout: PropTypes.number
};


FlashMessagesRow.defaultProps = {
  timeout: 5000
};

export default FlashMessagesRow;
