import styled from 'styled-components';

const SearchBox = styled.div``;

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  max-width: 800px;
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
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  cursor: pointer;
  transition: background-color 250ms linear;
  &:hover {
    background-color: #303f9f;
  }
`;

export { SearchBox, Form, ButtonIcon, Input, Button };
