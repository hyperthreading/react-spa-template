import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setCourseId } from '../../actions';

import logo from './logo.svg';
import styles from './index.css';

class App extends React.PureComponent {
  render() {
    const { courseId } = this.props;
    return (
      <div className={styles.App}>
        <header className={styles['App-header']}>
          <img
            src={logo}
            className={styles['App-logo']}
            alt="logo"
          />
          <h1 className={styles['App-title']}>Welcome to React</h1>
        </header>
        <p className={styles['App-intro']}>
          the course id is {courseId}
        </p>
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
