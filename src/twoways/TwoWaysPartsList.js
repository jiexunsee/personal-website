import React from 'react';
import { connect } from 'react-redux';
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

export default connect(mapStateToProps)(TwoWaysPartsList);
