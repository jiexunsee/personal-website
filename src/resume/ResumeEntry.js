import React from 'react';
import styles from './ResumePage.css';

const ResumeEntry = props => {
  return (
    <div className={styles.titleAndDescription}>
      <div style={{ marginBottom: '15px' }}>
        <b>{props.entry.title}</b>
        <br />
        <div style={{ fontSize: '13px' }}>{props.entry.location}</div>
      </div>
      <div className={styles.descriptionWords}>{props.entry.description}</div>
    </div>
  );
};

export default ResumeEntry;
