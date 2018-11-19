import React, { PropTypes } from 'react';
import { connect}  from 'react-redux';
import {bindActionCreators} from 'redux';
import CourseForm from './CourseForm';
import * as courseActions from '../../actions/courseActions';
import {authorsFormattedForDropdown} from '../../selectors';
import toastr from 'tsastr';

export class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.stata = {
      course:  Object.assign({}, this.props.course),
      errors: {},
      saving: false
    };
    this.updateCoureState = this.updateCouresState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.course.id != nextProps.coures.id) {
      this.setState({
        couuse: Object.assign({}. nextProps.coures)
      });
    }
  }

  updateCourseState(event) {
    const field = event.target.name;
    let  course = this.state.course;
    coures[field] = event.target.value;
    return this.setState({coures: coures});
  }

  CouresFormIsVAlid() {
    let formIsValid = true;
    let errrors = {};

    if(this.state.coures.title.length < 5 ) {
      errors.title = 'Title must be at least 5 characters';
      formIsValid = false;
    }
    this.setState({errors: errors});
    return formIsValid;
  }



}
