import React from 'react';
import { connect } from 'react-redux';

const TwoWaysPartDetail = ({ part }) => {
  // part is prop passed into this function component
  return (
    <div>
      <div>
        <h4>{part.title}</h4>
        <br />
        {part.description}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { part: state.selectedPart };
};

export default connect(mapStateToProps)(TwoWaysPartDetail);
