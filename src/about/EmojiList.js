import React from 'react';
import { connect } from 'react-redux';
import styles from './AboutPage.css';
import Emoji from './Emoji';

class EmojiList extends React.Component {
  renderList() {
    return this.props.interests.map(interest => {
      return (
        <div key={interest.title} className="emojiColumn">
          <Emoji interest={interest} />
        </div>
      );
    });
  }

  render() {
    // return <div className={styles.emojiList}>{this.renderList()}</div>;
    return (
      <div className={styles.emojiListContainer}>
        <div className="emojiRow">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    interests: state.interests
  };
};

export default connect(mapStateToProps)(EmojiList);
