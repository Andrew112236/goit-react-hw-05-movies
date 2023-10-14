import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h2`
  margin: 0;
`;
export const MovieBox = styled.div`
  display: flex;
  padding: 30px;
  border-bottom: solid 1px white;
  max-width: 1200px;
`;
export const MovieInfo = styled.div`
  padding: 20px 40px;
`;
export const GenresList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  gap: 16px;
  text-decoration: none;
`;

export const MovieLink = styled.li`
  list-style: none;
  display: flex;
  padding: 0;
  gap: 16px;
  text-decoration: none;
`;

export const LinkAtribute = styled.li`
  list-style: none;
  display: flex;
  padding: 0;
  text-decoration: none;
`;

export const StyledLink = styled(Link)`
  list-style: none;
  color: white;
  padding: 5px;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    border-radius: 15px;
    background-color: #004b69;
    color: white;
    font-weight: bold;
  }
`;

export const Button = styled.button`
  margin-top: 16px;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  margin-bottom: 10px;
  font-weight: 500;
  &:hover {
    background-color: #63c5da;
  }
  background-color: #004b69;
`;

export const LinkBack = styled(Link)`
  display: flex;
  font-size: 14px;
  align-items: center;
  column-gap: 10px;
  color: white;
  list-style: none;
  text-decoration: none;
`;
export const InfoBox = styled.div`
  padding: 20px;
  border-bottom: solid 1px white;
  max-width: 1200px;
  text-decoration: none;
`;
