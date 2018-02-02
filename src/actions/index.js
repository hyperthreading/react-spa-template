
export const SET_COURSE_ID = "SET_COURSE_ID";
export function setCourseId(id) {
  return {
    type: SET_COURSE_ID,
    id
  };
}

export const SET_COURSE_TITLE = "SET_COURSE_TITLE";
export function setCourseTitle(data) {
  return {
    type: SET_COURSE_TITLE,
    data: data
  };
}

export const REQUEST_INSIGHT_CONTENT = "REQUEST_INSIGHT_CONTENT";
export function requestInsightContent(courseId) {
  return {
    type: REQUEST_INSIGHT_CONTENT
  };
}
