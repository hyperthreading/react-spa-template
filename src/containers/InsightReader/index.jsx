import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTestCourseContent } from '../../apis/test';

class InsightReader extends Component {
  render() {
    const { courseId, dispatch } = this.props;
    return (
      <div>
        InsightReader Container. Course id is {courseId}<br />
        <a onClick={() => {dispatch(fetchTestCourseContent(100));}}>
          Click me to change course id to 100 asynchrously
        </a>
      </div>
    );
  }
}
 
function mapStateToProps(state) {
  return {
    insight: state.get("insight"),
    courseId: state.get("courseId")
  };
}

export default connect(mapStateToProps)(InsightReader);

