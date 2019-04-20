import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import MainPage from '../main/MainPage';
import AboutPage from '../about/AboutPage';
import ContactPage from '../contact/ContactPage';
import Resume from '../resume/ResumePage';
import Mephibosheth from '../mephibosheth/Mephibosheth';
import TwoWays from '../twoways/TwoWays';
import reducers from '../reducers';
import styles from './App.css';

class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <div className={styles.wholePage}>
          <header className={styles.header}>
            <Link className={styles.link} to="/">
              Home
            </Link>
            <Link className={styles.link} to="/about">
              About
            </Link>
            <Link className={styles.link} to="/resume">
              Resume
            </Link>
            {/* <Link className={styles.link} to="/contact">
                  Contact
                </Link> */}
          </header>
          <div className={styles.mainContent}>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactPage} />
              <Route path="/resume" component={Resume} />
              <Route path="/mephibosheth" component={Mephibosheth} />
              <Route path="/twoways" component={TwoWays} />
            </Switch>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
