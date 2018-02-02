import {Map, List} from 'immutable';

import * as rootActions from '../actions';

// 대강 이런식으로 나눌 수 있다는 것을 보이기 위한 리듀서임
export default function courseTitleReducer(state, action) {
  switch (action.type) {
  case rootActions.SET_COURSE_TITLE: {
    const { title, subtitle } = action.data;
    return state.set("courseTitle", Map({ title, subtitle }));
  }
  }
}
