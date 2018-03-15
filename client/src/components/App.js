import React, { Component } from 'react';
import './styles/App.css';
// import Tilt from 'react-tilt';
import NavBar from './navBar';
import SignupPage from './signupPage'
import Login from './login-signup/login';
import ExercisePage from './exercisePage';
import WorkoutPage from './workoutPage';
import Dashboard from './dashboard';
import {Route} from 'react-router-dom';
import YourWorkouts from './workout/yourWorkouts';


class App extends Component {

  onMouseLeave(e) {
    console.log('clientY:', e.nativeEvent.clientY);
  }
  render() {
    return (
      // <div className="App">
      //     <Tilt className="Tilt" style={{ height: 1750, width: 1750 }} options={{ max : 5, scale: 1 }} onMouseLeave={this.onMouseLeave}>
      //       <div className="Tilt-inner">
      //       <p>hi</p>
      //       </div>
      //     </Tilt>
      // </div>
      <div>
        <NavBar />
        <Route exact path='/register' component={SignupPage} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/exercises' component={ExercisePage} />
        <Route exact path='/workouts' component={WorkoutPage} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/yourWorkout' component={YourWorkouts} />
      </div>
    );
  }
}
export default App;