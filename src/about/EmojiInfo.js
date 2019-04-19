import React from 'react';
import styles from './AboutPage.css';

class EmojiInfo extends React.Component {
  render() {
    return <div className={styles.emojiInfo}>{this.props.description}</div>;
  }
}

export default EmojiInfo;
