import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieLink = styled(Link)`
  text-decoration: none;
  padding: 5px 8px;

  &:visited {
    color: white;
  }
  &:hover {
    border-radius: 15px;
    background-color: #004b69;
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
  font-size: 30px;
`;
