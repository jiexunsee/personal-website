import React from 'react';
import styles from './AboutPage.css';

const AboutMainInfo = props => {
  return (
    <div className={styles.mainInfo} style={props.infoStyle}>
      <img
        src={require('./profileblur.png')}
        alt="profile"
        className={styles.profilepic}
      />

      <p className={styles.text}>
        My name is <b>Jie Xun</b>, and I am a Computer Science student at
        Nanyang Technological University. I will be graduating in December 2019.
      </p>
    </div>
  );
};

export default AboutMainInfo;
