import React from 'react';
import { browserHistory } from 'react-router';

export default class Link extends React.Component {
  render(){
    return (
      <div>
        <h1>Your Links</h1>
        <button onClick={() => {
          browserHistory.push('/')
        }}>Logout</button>
      </div>
    );
  }
}
