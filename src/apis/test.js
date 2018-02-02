import * as actions from '../actions';

export function fetchTestCourseContent(courseId) {
  return (dispatch) => {
    dispatch(actions.requestInsightContent(courseId));
    setTimeout(() => {
      dispatch(actions.setCourseId(courseId));
    }, 2000);
  };
}
