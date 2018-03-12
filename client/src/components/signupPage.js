import React from 'react';
import SignupForm from './signupForm'
import {connect} from 'react-redux';

class SignupPage extends React.Component {
  render() {
    return (
      <div><h3>{`Welcome to the signup page ${this.props.currentUser}`}</h3>
      <SignupForm />
      </div>
    )
  }
}

const mapStatetoProps = state => ({
  currentUser: state.auth.currentUser
})

export default connect(mapStatetoProps)(SignupPage);

