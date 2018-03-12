import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Nav = styled.ul`
  display: flex;
  flex-direction: cloumn;
  list-style: none
`;

export const StyleLink = styled(Link)`
  padding-right: 30px;
  color: red;
  font-size: 16px;
  text-decoration: none;
`;