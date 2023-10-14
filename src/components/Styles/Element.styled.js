import styled from 'styled-components';

const SearchBox = styled.div``;

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  max-width: 1000px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  margin-top: 8px;
`;

const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 16px;
  // border: none;
  // outline: none;
  padding: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

const ButtonIcon = styled.button`
  display: flex;
  align-items: center;
  background-color: inherit;
  width: 30px;
  height: 30px;
  border: 0;
  margin-right: 4px;
  margin-left: 4px;
  cursor: pointer;
  outline: none;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-top: ${p => p.theme.space[4]}px;
  border: none;
  border-radius: 15px;
  background-color: #3f51b5;
  color: white;
  text-decoration: none;
  font-family: inherit;
  font-size: 16px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;

  cursor: pointer;
  transition: background-color 250ms linear;
  &:hover {
    background-color: #303f9f;
  }
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  list-style: none;
`;

export { SearchBox, Form, ButtonIcon, Input, Button, ReviewContainer };
