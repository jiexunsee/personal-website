import React from 'react';
import styles from './MainPage.css';

class MainPage extends React.Component {
  render() {
    return (
      <div className={styles.contentbox}>
        <div style={{ flexGrow: 3 }} />
        <div>
          <h1 className={styles.hello}>Hello,</h1>
          <h2 className={styles.text}>My name is Jie Xun.</h2>
          <h4 className={styles.text}>I'm a computer scientist.</h4>
        </div>
        <div style={{ flexGrow: 5 }} />
      </div>
    );
  }
}

export default MainPage;
