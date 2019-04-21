import React from 'react';
import { connect } from 'react-redux';
import { selectPart } from '../actions';
import styles from './TwoWays.css';
import TwoWaysIcon from './TwoWaysIcon';

class TwoWaysPartsList extends React.Component {
  renderList() {
    return this.props.parts.map(part => {
      return (
        <div className={styles.partBox} key={part.title}>
          <TwoWaysIcon part={part} />
        </div>
      );
    });
  }

  render() {
    return <div className={styles.horizontalList}>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { parts: state.parts };
};

// dispatch function
// need to tell redux that this function is an action creator. action needs to be sent to dispatch function
export default connect(
  mapStateToProps,
  { selectPart }
)(TwoWaysPartsList);
