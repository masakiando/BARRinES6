import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadCoursesSuccess(courses) {
  debugger;
  return { type: types.LOAD_COURSES_SUCCESS, courses};
}

export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSE_SUCCESS, course};
}

export function deleteCourseSuccess(courses) {
  debugger;
  return {type: types.DELETE_COURSE_SUCCESS, courses};
}

export function loadCourses() {
  debugger;
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses()
    .then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function saveCourse(course) {
  debugger;
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(course => {
      course.id ? dispatch(updateCourseSuccess(course)) :
        dispatch(createCourseSuccess(course));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function deleteCourse(courseId) {
  debugger;
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.deleteCourse(courseId).then(courses => {
      dispatch(deleteCourseSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}
