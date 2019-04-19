import React from 'react';
import { connect } from 'react-redux';
import TwoWaysPartsList from './TwoWaysPartsList';
import TwoWaysPartDetail from './TwoWaysPartDetail';
import { selectDefaultPart, mouseOverInterest } from '../actions';
import styles from './TwoWays.css';

class TwoWays extends React.Component {
  render() {
    this.props.mouseOverInterest(null);
    // this.props.selectDefaultPart(); // depends if you want to start from start again when user navigates away and comes back
    return (
      <div className={styles.contentBox}>
        <TwoWaysPartsList />
        <TwoWaysPartDetail />
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  { mouseOverInterest, selectDefaultPart }
)(TwoWays);
