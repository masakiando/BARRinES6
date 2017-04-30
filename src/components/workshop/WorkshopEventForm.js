import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import { saveWorkshopEvent } from '../../actions/workshopEventActions';
import TextFieldGroup from '../common/TextFieldGroup';

class WorkshopEventForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      title: '',
      errors: {},
      isLoading: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      [ event.target.name ]: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.saveWorkshopEvent(this.state);
  }

  render() {
    const {
      title,
      errors,
      isLoading
    } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Workshop Event</h1>

        <TextFieldGroup
          name="title"
          label="Workshop Title"
          value={title}
          error={errors.title}
          onChange={this.onChange}
        />

        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    );
  }
}

WorkshopEventForm.propTypes = {
  saveWorkshopEvent: PropTypes.func.isRequired
};

export default connect(
  null, { saveWorkshopEvent }
)(WorkshopEventForm);
