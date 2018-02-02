import React, { Component } from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';

import InsightReader from '../InsightReader';
import { setCourseId } from '../../actions';

import styles from './index.css';

const courseMainCn = styles.courseMainPane;

const LeftPane = ({ courseId }) => (
  <div className={cn(courseMainCn, styles.courseMainLeftPane)}>
    add here course title id: {courseId}<br />
  <InsightReader/>
  </div>
);

const RightPane = ({ courseId }) => (
  <div className={cn(courseMainCn, styles.courseMainRightPane)}>
    Right pane (Build some component here)
  </div>
);

const BottomBarContainer = () => (
  <div className={styles.bottomBar}>
    <span>LALALALALAL</span>
  </div>
);

class App extends React.PureComponent {
  render() {
    const { courseId } = this.props;
    return (
      <div>
        <div className={styles.courseMain}>
          <LeftPane courseId={courseId} />
          <RightPane courseId={courseId} />
        </div>
        <BottomBarContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  courseId: state.get('courseId')
});

const mapDispatchToProps = (dispatch) => ({
  setCourseId
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
