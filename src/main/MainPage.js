import React from 'react';
import styles from './MainPage.css';
import ContactIcon from './ContactIcon';

class MainPage extends React.Component {
  render() {
    return (
      <div className={styles.contentBox}>
        <div style={{ flexGrow: 3 }} />
        <div>
          <h1 className={styles.hello}>Hello!</h1>
          <h2 className={styles.text}>I'm Jie Xun.</h2>
          <h4 className={styles.text}>
            I'm a computer scientist from Singapore.
          </h4>
        </div>
        <div style={{ flexGrow: 5 }} />
        <div className={styles.contactBox}>
          <ContactIcon
            link="http://instagram.com"
            image="./instagram.png"
            alt="insta"
          />
          <ContactIcon
            link="https://www.linkedin.com/in/jie-xun-see-161169137/"
            image="./linkedin.png"
            alt="linkedin"
          />
          <ContactIcon
            link="https://github.com/jiexunsee"
            image="./github.png"
            alt="github"
          />
          <ContactIcon
            link="mailto: jsee005@e.ntu.edu.sg"
            image="./mail.png"
            alt="mail"
          />
        </div>
      </div>
    );
  }
}

export default MainPage;
