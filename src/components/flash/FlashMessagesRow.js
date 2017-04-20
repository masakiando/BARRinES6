import React, {PropTypes} from 'react';
import classnames from 'classnames';

class FlashMessagesRow extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.deleteFlashMessage(this.props.message.id);
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
          onClick={this.onClick}
          className="close"><span>&times;</span></button>
        ようこそ{text}さん
      </div>
    );
  }
}

FlashMessagesRow.propTypes = {
  message: PropTypes.object.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired
};

export default FlashMessagesRow;
