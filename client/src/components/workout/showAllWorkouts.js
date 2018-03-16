import React from 'react';
import requiresLogin from '../requires-login';

class ShowAllWorkout extends React.Component {

  render() {
    return (
      <h1>hi</h1>
    )
  }
}

export default requiresLogin()(ShowAllWorkout)