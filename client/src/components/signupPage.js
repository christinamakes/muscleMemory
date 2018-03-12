import React from 'react';
import SignupForm from './signupForm'


export default class SignupPage extends React.Component {
  render() {
    return (
      <div><h3>{`Welcome to the signup page ${this.props.currentUser}`}</h3>
      <SignupForm />
      </div>
    )
  }
}



