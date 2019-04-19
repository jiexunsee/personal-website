import React from 'react';
import { Link } from 'react-router-dom';
import './Mephibosheth.css';

class Mephibosheth extends React.Component {
  render() {
    return (
      <div className="Mephibosheth.content-area">
        <div>
          <h2 className="title">Who is Mephibosheth?</h2>
          <p>
            "What is your servant, that you should show regard for a dead dog
            such as I?"
          </p>
          <Link to="/twoways">
            <button className="ui button">
              A short presentation of the Christian message
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Mephibosheth;
