import React from 'react';
import requiresLogin from './requires-login';



class WorkoutPage extends React.Component {
  render() {
    return (
      <div>
      
      </div>
    )
  }
}


export default requiresLogin()(WorkoutPage)
