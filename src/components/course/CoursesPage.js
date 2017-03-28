import React, {PropTypes} from 'react';
import {connect} from 'react-redux'; // Component(React)とReduxの接続
// connect接続することで   props(mapなし)かContext(mapあり)かにdispatchを作る
// Reactのイベントを機にアクションを派遣します。this.props.dispatch利用可能。
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  render() {
    const {courses} = this.props;

    debugger;
    return (
      <div>
        <h1>Courses</h1>
          <input type="submit"
                 value="Add Course"
                 className="btn btn-primary"
                 onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={courses} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

//storeの更新後、storeがreducerから受け取った複製ステートをここでももらう!!! courses!!!
//コンポーネントはReduxストアの更新をサブスクライブします。
// コンポーネントの小道具にマージされる単純なオブジェクト* でなければなりません。
// このコンポーネントpropsにcoursesを作る
// このコンポーネントthis.props.coursesが利用できる。
//ownPropsでいろいろもらう
function mapStateToProps(state, ownProps) {
  debugger;
  return {
    courses: state.courses
  };
}
//connectしてmapDispatchToPropsにMapすればこのComponentの
//PropsにcreateCourseが登録される。
function mapDispatchToProps(dispatch) {
  debugger;
  return {
    // createCourse: (course) => dispatch(courseActions.createCourse(course))
    // All ctionsにオートdispatchしてくれる。
    actions: bindActionCreators(courseActions, dispatch)
  };
}
//Component(React)とReduxの接続
// const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
// export default connectedStateAndProps(CoursesPage);

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
