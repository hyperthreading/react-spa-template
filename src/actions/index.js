
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
