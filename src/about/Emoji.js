import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { mouseOverInterest } from '../actions';
import styles from './AboutPage.css';

class Emoji extends React.Component {
  state = { emojiStyle: { opacity: 0.2 } };

  onMouseEnter() {
    this.props.mouseOverInterest(this.props.interest);
    this.setState({ emojiStyle: { opacity: 1 } });
  }

  onMouseLeave() {
    this.props.mouseOverInterest(null);
    this.setState({ emojiStyle: { opacity: 0.2 } });
  }

  renderEmoji() {
    const { image, title } = this.props.interest;
    return (
      <div style={this.state.emojiStyle}>
        <img
          className={styles.emojiImage}
          src={require(`${image}`)}
          alt={title}
          onMouseOver={() => {
            this.onMouseEnter();
          }}
          onMouseLeave={() => {
            this.onMouseLeave();
          }}
        />
      </div>
    );
  }

  render() {
    if (this.props.interest.link) {
      return <Link to={this.props.interest.link}>{this.renderEmoji()}</Link>;
    } else {
      return <div>{this.renderEmoji()}</div>;
    }
  }
}

const mapStateToProps = state => {
  return { selected: state.selectedInterest };
};

export default connect(
  mapStateToProps,
  { mouseOverInterest }
)(Emoji);
