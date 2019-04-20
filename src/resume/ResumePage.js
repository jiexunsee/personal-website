import React from 'react';
import styles from './ResumePage.css';
import ResumeEntry from './ResumeEntry';
import { descriptions } from './ResumeDescriptions';

class ResumePage extends React.Component {
  render() {
    return (
      <div className={styles.allContent}>
        <div className={styles.sectionTitle}>Work Experience</div>
        <table className={styles.tableStyle}>
          <tr className={styles.rowWithBorder}>
            <td>
              <img src={require('./hudl.png')} alt="hudl" height="40px" />
            </td>
            <td className={styles.descriptionContent}>
              <ResumeEntry entry={descriptions.hudl} />
            </td>
          </tr>
          <tr>
            <td>
              <img src={require('./mclaren.png')} alt="mclaren" height="40px" />
            </td>
            <td className={styles.descriptionContent}>
              <ResumeEntry entry={descriptions.mclaren} />
            </td>
          </tr>
        </table>

        <div className={styles.sectionTitle}>Achievements</div>
        <table className={styles.tableStyle}>
          <tr className={styles.rowWithBorder}>
            <td className={styles.descriptionContent}>
              <ResumeEntry entry={descriptions.cimb} />
            </td>
            <td>
              <img src={require('./cimb.jpg')} alt="cimb" height="100px" />
            </td>
          </tr>
          <tr className={styles.rowWithBorder}>
            <td className={styles.descriptionContent}>
              <ResumeEntry entry={descriptions.imaginecup} />
            </td>
            <td>
              <img
                src={require('./imaginecup.jpg')}
                alt="imaginecup"
                height="100px"
              />
            </td>
          </tr>
          <tr className={styles.rowWithoutBorder}>
            <td className={styles.descriptionContent}>
              <ResumeEntry entry={descriptions.sia} />
            </td>
            <td>
              <img src={require('./sia.jpg')} alt="sia" height="100px" />
            </td>
          </tr>
        </table>

        <div className={styles.sectionTitle}>Projects</div>
        <table className={styles.tableStyle}>
          <tr className={styles.rowWithBorder}>
            <td>
              <img src={require('./gnn.png')} alt="fyp" height="100px" />
            </td>
            <td className={styles.descriptionContent}>
              <ResumeEntry entry={descriptions.fyp} />
            </td>
          </tr>
          <tr className={styles.rowWithoutBorder}>
            <td>
              <img
                src={require('./website.png')}
                alt="website"
                height="100px"
              />
            </td>
            <td className={styles.descriptionContent}>
              <ResumeEntry entry={descriptions.website} />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default ResumePage;
