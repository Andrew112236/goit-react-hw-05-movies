import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: auto;
  margin: 0 auto;
  padding: 20px 0px 16px 50px;
  background-color: #690d00;
  color: white;
`;

export const Header = styled.header`
  padding: 20px 0;
  border-bottom: solid 1px white;
  max-width: 1200px;
  > nav {
    display: flex;
    gap: 20px;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #004b69;
  }
`;
