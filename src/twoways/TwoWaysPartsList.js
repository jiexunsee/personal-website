import React from 'react';
import { connect } from 'react-redux';
import { selectPart } from '../actions';

class TwoWaysPartsList extends React.Component {
  renderList() {
    return this.props.parts.map(part => {
      return (
        <div key={part.title}>
          <div className="content">
            <img
              src={part.image}
              alt={part.imageAlt}
              onClick={() => this.props.selectPart(part)}
            />
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderList()}</div>;
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
