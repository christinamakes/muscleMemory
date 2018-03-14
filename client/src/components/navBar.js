import React, {Component} from 'react' ;
// import styled from 'styled-components';
// import {Link} from 'react-router-dom';
import {Nav, StyleLink} from './styles/links'

class NavBar extends Component {

  render() {
    return (
      <nav className='nav-bar'>
        <Nav>
            <StyleLink to='/'>Home</StyleLink>
            <StyleLink to='/exercises'>Exercises</StyleLink>
            <StyleLink to='/workouts'>Workouts</StyleLink>
            <StyleLink to='/register'>Sign up</StyleLink>
            <StyleLink to='/login'>Login</StyleLink>
        </Nav>
      </nav>
    );
  }
}

export default NavBar;