import React from 'react';
import { connect } from 'react-redux';
import styles from './TwoWays.css';

const TwoWaysPartDetail = ({ part }) => {
  // part is prop passed into this function component
  return (
    <div>
      <div className={styles.descriptionBox}>
        <div className={styles.headingStyle}>{part.title}</div>
        <div className={styles.descriptionStyle}>{part.description}</div>
        <br />
        <br />
        <div className={styles.transitionStyle}>{part.transition}</div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { part: state.selectedPart };
};

export default connect(mapStateToProps)(TwoWaysPartDetail);
