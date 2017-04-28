import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import {authorsFormattedForDropdown} from '../../selectors/selectors';
import toastr from 'toastr';

export class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      // state初期設定値二回目は呼ばれない？再レンダリングでは呼ばれない?
      // state初期値にはthis.props.courseを指定する。
      // propsはmapStateToPropsで指定されている。
      course: Object.assign({}, this.props.course),
      errors: {},
      saving: false
    };
    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }
  // 既存のコースが直接ロード(このページへ直接アクセス,再レンダリング)されたときにフォームを生成するために必要です。
  // componentがPropsを受け取る直前に呼ばれる。
  // render()が始まる前に、setStateをしておく。
  componentWillReceiveProps(nextProps) {
    debugger;
    if (this.props.course.id != nextProps.course.id) {
      // Necessary to populate form when existing course is loaded directly.
      this.setState({course: Object.assign({}, nextProps.course)});
    }
  }
//
  updateCourseState(event) {
    debugger;
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course});
  }
  // mapDispatchToPropsでこのcomponentにcourseActionsを公開したのでthis.propsにはactionsプロパティがある。
  // そのsaveCourseにアクセスする。この時this.state.courseを引数に指定する。
  // 引数this.state.courseはonChangeイベントののupdateCourseStateによってユーザがinputに入力した値となっており
  // この値をsaveCourseで使用する。
  // (event)はevent.preventDefault();のために利用する。
  // this.context.router.push('/courses');ではリダイレクト先を指定している。

  CourseFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.course.title.length < 5 ) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }
    this.setState({errors: errors});
    return formIsValid; // 初期値true, errors なら falseを返す
  }


  saveCourse(event) {
    debugger;
    event.preventDefault();

    if(!this.CourseFormIsValid()) { //falseなら処理終了
      return;
    }

    this.setState({saving: true});
    this.props.actions.saveCourse(this.state.course)
      .then(() => this.redirect()).catch(error => {
      toastr.error(error);
      this.setState({saving: false});
    });
  }

  redirect() {
    debugger;
    this.setState({saving: false});
    toastr.success('Course saved');
    this.context.router.push('/courses');
  }
  render() { //propTypes, constructor state, bind(this) 検証
    return (
      <CourseForm
        onChange={this.updateCourseState}
        onSave={this.saveCourse}
        allAuthors={this.props.authors}
        course={this.state.course}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}
// this.props.course authors actionsの検証 renderで使用
// mapStateToProps,mapDispatchToPropsで所得したもの
ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
//ルータをthis.context.routerで利用できるように、 "React Router"コンテキストをプルします。
ManageCoursePage.contextTypes = {
  router: PropTypes.object
};
//state.courses, courseIdを受け取りfilterでcourse.idとidが一致する
// ものをcourse変数に入れる。if (course) trueなら
// 配列courseにはObjectが入っていてそのindex0をreturnする。
// 内容が描画される
function getCourseById(courses, id) {
  debugger;
  const course = courses.filter(course => course.id == id);
  debugger;
  if (course) return course[0];
  return null;
}

//stateからPropを作る
//状態が変わるたびにストアからアプリケーション状態を受け取り、そのデータからそのデータをコンポーネントに利用できるようにしpropsます。
function mapStateToProps(state, ownProps) {
  debugger;
  // ownPropsはObjectを多数持っていてその中のparams:Objectを使用する
  const courseId = ownProps.params.id; // from the path `/course/:id`

  let course = {
                id: '',
                watchHref: '',
                title: '',
                authorId: '',
                length: '',
                category: ''
              };
  // return { course: course,が処理されてcourseがこのcomponentのstateになってから
  // この式が成立するようにstate.courses.length > 0をする。
  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }

// authorsFormattedForDropdown functionはexportにあり

  //下記がPropになる
  return {
    course: course,
    authors: authorsFormattedForDropdown(state.authors)
  };
}

//component内ののブラウザイベントを機にcourseActionsをdispatchする
//自動でactions functionへ繋いでくれる
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(ManageCoursePage);
