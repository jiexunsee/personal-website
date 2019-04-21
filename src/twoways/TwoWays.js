import React from 'react';
import { connect } from 'react-redux';
import TwoWaysPartsList from './TwoWaysPartsList';
import TwoWaysPartDetail from './TwoWaysPartDetail';
import { selectDefaultPart, mouseOverInterest } from '../actions';
import styles from './TwoWays.css';

class TwoWays extends React.Component {
  renderFootnote() {
    return (
      <div className={styles.footnote}>
        This material was adapted from Matthias Media's Two Ways To Live, and
        the images were taken from there. Their{' '}
        <a
          href="https://www.matthiasmedia.com.au/2wtl/"
          className={styles.link}
        >
          website
        </a>{' '}
        has a fuller explanation and contains more information on where to go
        from here.
      </div>
    );
  }
  render() {
    this.props.mouseOverInterest(null);
    // this.props.selectDefaultPart(); // depends if you want to start from start again when user navigates away and comes back
    return (
      <div className={styles.contentBox}>
        <TwoWaysPartsList />
        <TwoWaysPartDetail />
        <div className={styles.introductionBox}>
          {/* This is a summary of the Christian message. It's called Two Ways to
          Live, adapted from Matthias Media. (I don't mean any copyright
          infringement) */}
        </div>
        {this.props.selectedPart.imageAlt === '6' ? (
          this.renderFootnote()
        ) : (
          <div />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { selectedPart: state.selectedPart };
};

export default connect(
  mapStateToProps,
  { mouseOverInterest, selectDefaultPart }
)(TwoWays);
