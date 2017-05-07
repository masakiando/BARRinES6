import React, {PropTypes} from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import * as courseActions from '../../actions/courseActions';
import WorkshopList from './WorkshopList';
import {browserHistory} from 'react-router';
// import toastr from 'toastr';

class WorkshopsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    // this.state = {
    //   errors: {},
    //   saving: false
    // };
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    // this.deleteCourse = this.deleteCourse.bind(this);
  }

  // courseRow(course, index) {
  //   return <div key={index}>{course.title}</div>;
  // } //.
  //
  redirectToAddCoursePage() {
    browserHistory.push('/workshop');
  } //.
  //
  // deleteCourse(courseId) {
  //   debugger;
  //   this.setState({saving: true});
  //   this.props.actions.deleteCourse(courseId)
  //   .then(() => this.redirect());
  // } //. ※ bindを忘れない!
  //
  // redirect() {
  //   debugger;
  //   this.setState({saving: false});
  //   toastr.success('Course deleted');
  // }

  render() {
    return (
      <div>
        <h1>Workshops</h1>
          <input
            type="submit"
            value="Add Workshop"
            className="btn btn-primary"
            onClick={this.redirectToAddCoursePage}/>
          <WorkshopList />
      </div>
    );
  }
}

// WorkshopsPage.propTypes = {
//   courses: PropTypes.array.isRequired,
//   actions: PropTypes.object.isRequired
// };
//
// function mapStateToProps(state, ownProps) {
//   debugger;
//   return {
//     courses: state.courses
//   };
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(courseActions, dispatch)
//   };
// }

export default WorkshopsPage;
// export default connect(mapStateToProps, mapDispatchToProps)(WorkshopsPage);
