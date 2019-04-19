import React from 'react';
import styles from './ResumePage.css';
import ResumeEntry from './ResumeEntry';
import { descriptions } from './ResumeDescriptions';

class ResumePage extends React.Component {
  render() {
    return (
      <div className={styles.allContent}>
        <div className={styles.sectionTitle}>Work Experience</div>
        <div className={styles.rowContent}>
          <div className={styles.imageContent}>
            <img
              // src={require(`${descriptions.hudl.image}`)}
              src={require('./hudl.png')}
              alt="hudl"
              height="40px"
            />
          </div>
          <div className={styles.descriptionContent}>
            <ResumeEntry entry={descriptions.hudl} />
          </div>
        </div>
        <div className={styles.separatorLine} />

        <div className={styles.rowContent}>
          <div className={styles.imageContent}>
            <img
              // src={require(`${descriptions.mclaren.image}`)}
              src={require('./mclaren.png')}
              alt="mclaren"
              height="35px"
            />
          </div>
          <div className={styles.descriptionContent}>
            <ResumeEntry entry={descriptions.mclaren} />
          </div>
        </div>

        <div className={styles.sectionTitle}>Achievements</div>
        <div className={styles.rowContent}>
          <div className={styles.descriptionContent}>
            <ResumeEntry entry={descriptions.cimb} />
          </div>
          <div className={styles.imageContent}>
            <img
              // src={require(`${descriptions.cimb.image}`)}
              src={require('./cimb.jpg')}
              alt="cimb"
              height="100px"
            />
          </div>
        </div>
        <div className={styles.separatorLine} />

        <div className={styles.rowContent}>
          <div className={styles.descriptionContent}>
            <ResumeEntry entry={descriptions.imaginecup} />
          </div>
          <div className={styles.imageContent}>
            <img
              // src={require(`${descriptions.imaginecup.image}`)}
              src={require('./imaginecup.jpg')}
              alt="imaginecup"
              height="100px"
            />
          </div>
        </div>
        <div className={styles.separatorLine} />

        <div className={styles.rowContent}>
          <div className={styles.descriptionContent}>
            <ResumeEntry entry={descriptions.sia} />
          </div>
          <div className={styles.imageContent}>
            <img
              // src={require(`${descriptions.sia.image}`)}
              src={require('./sia.jpg')}
              alt="sia"
              height="100px"
            />
          </div>
        </div>

        <div className={styles.sectionTitle}>Projects</div>
        <div className={styles.rowContent}>
          <div className={styles.imageContent}>
            <img
              // src={require(`${descriptions.cimb.image}`)}
              src={require('./gnn.png')}
              alt="gnn"
              height="100px"
            />
          </div>
          <div className={styles.descriptionContent}>
            <ResumeEntry entry={descriptions.fyp} />
          </div>
        </div>
        <div className={styles.separatorLine} />

        <div className={styles.rowContent}>
          <div className={styles.imageContent}>
            <img
              // src={require(`${descriptions.cimb.image}`)}
              src={require('./website.png')}
              alt="website"
              height="100px"
            />
          </div>
          <div className={styles.descriptionContent}>
            <ResumeEntry entry={descriptions.website} />
          </div>
        </div>
      </div>
    );
  }
}

export default ResumePage;
