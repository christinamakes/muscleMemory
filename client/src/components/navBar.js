import React, {Component} from 'react' ;
import styled from 'styled-components';

const Nav = styled.ul`
  color: red;
  list-style: none
`;

class NavBar extends Component {

  render() {
    return (
      <div className='nav-bar'>
        <Nav>
          <li>Home</li>
          <li>Exercises</li>
        </Nav>
      </div>
    );
  }
}

export default NavBar;