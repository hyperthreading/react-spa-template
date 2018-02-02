import React, { Component } from 'react';
import { connect } from 'react-redux';

class InsightReader extends Component {
  render() {
    const { courseId } = this.props;
    return (
      <div>
        InsightReader Container. Course id is {courseId}
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

