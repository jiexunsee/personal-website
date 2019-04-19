import React from 'react';
import { connect } from 'react-redux';
import TwoWaysPartsList from './TwoWaysPartsList';
import TwoWaysPartDetail from './TwoWaysPartDetail';
import { mouseOverInterest } from '../actions';

class TwoWays extends React.Component {
  render() {
    this.props.mouseOverInterest(null);
    return (
      <div>
        <TwoWaysPartsList />
        <TwoWaysPartDetail />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { mouseOverInterest }
)(TwoWays);
