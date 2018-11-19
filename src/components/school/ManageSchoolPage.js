import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SchoolForm from './SchoolForm';

class ManageSchoolPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school:{
        id: '',
        schoolName: '',
        address: '',
        Establishment: '',
        phoneNumber: ''
      },
      errors: {},
      saving: false
    };
    this.updateSchoolState = this.updateSchoolState.bind(this);
    this.saveSchool = this.saveSchool.bind(this);
  }

  updateSchoolState(event) {
    debugger;
    const field = event.target.name;
    let school = this.state.school;
    school[field] = event.target.value;
    console.log('onChange ok');
    return this.setState({ school: school });
  }

  saveSchool(event) {
    event.preventDefault();
    console.log('onSave ok');
  }
  render() {
    return (
      <SchoolForm
        onChange={this.updateSchoolState}
        onSave={this.saveSchool}
        school={this.state.school}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

export default ManageSchoolPage;
