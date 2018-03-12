import React, {Component} from 'react' ;
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Nav = styled.ul`
  color: red;
  list-style: none
`;

class NavBar extends Component {

  render() {
    return (
      <nav className='nav-bar'>
        <Nav>
          <Link to='/'>Home</Link>
          <li>Exercises</li>
          <Link to='/register'>Sign up</Link>
        </Nav>
      </nav>
    );
  }
}

export default NavBar;