import React from 'react';
import { connect } from 'react-redux';
import { selectPart } from '../actions';
import styles from './TwoWays.css';

class TwoWaysIcon extends React.Component {
  renderIcon() {
    return (
      <div
        className={styles.imageContainer}
        onClick={() => this.props.selectPart(this.props.part)}
      >
        <img
          src={require(`${this.props.part.image}`)}
          alt={this.props.part.imageAlt}
          className={styles.iconStyle}
        />
      </div>
    );
  }

  render() {
    if (this.props.part.title === this.props.selectedPart.title) {
      return <div>{this.renderIcon()}</div>;
    } else {
      return <div style={{ opacity: 0.15 }}>{this.renderIcon()}</div>;
    }
  }
}

const mapStateToProps = state => {
  return { selectedPart: state.selectedPart };
};

// need to tell redux that this function is an action creator. action needs to be sent to dispatch function
export default connect(mapStateToProps, { selectPart })(TwoWaysIcon);
