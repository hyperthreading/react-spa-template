import immutable, {Map, List} from 'immutable';

import courseTitleReducer from './courseTitle';
import * as rootActions from '../actions';

// Use Immutable Map and List instead of Javascript Object and Array
const defaultState = Map({
  courseId: 19465,
  courseTitle: Map({
    title: "Sports Bubble",
    subtitle: "How salaries of Neymar, Kershaw, and Stephen Curry work"
  }),
  courseContent: {
    // insight, video_clip, article, expression
    selected: "article",
    insight: Map({
      fetching: false,
      language: "korean",

      // content from API
      korean: Map({}), 
      english: Map({})
    }),
    videoClip: Map(),
    article: Map(),
    expression: Map(),
    bottomMenu: Map()
  },
  userDocument: {
    // key_questions, google_docs
    selected: "google_docs",
    keyQuestions: Map(),
    googleDocs: Map()
  }
});

// Root reducer
export default function rootReducer(state = defaultState,
                                    action)
{
  switch (action.type) {
  case rootActions.SET_COURSE_ID: {
    return state.set("courseId", action.id);
  }
  // 그냥 루트에 넣어도 되지만 예로 삼기 위해 리듀서 composition을 했음
  case rootActions.SET_COURSE_TITLE:
  case rootActions:
    return courseTitleReducer(state, action);
  default:
    return state;
  }
}
