import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieLink = styled(Link)`
  text-decoration: none;
  padding: 5px 8px;

  &:visited {
    color: blue;
  }

  &:hover {
    border-radius: 15px;
    box-shadow: 1px 2px 4px 3px rgba(231, 233, 255, 5);
    background-color: rgb(31, 133, 255);
    color: white;
    font-weight: bold;
  }
`;
export const MovieList = styled.ul`
  padding: 20px 0 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  list-style-type: lower-numerical;
  list-style-color:
  text-decoration: none;
`;

export const Title = styled.h2`
  margin-top: 20px;
  margin-bottom: 0;
`;
