import { Form } from './../Styles/Element.styled';

const SearchForm = ({ onSubmit, children }) => (
  <Form onSubmit={onSubmit}>{children}</Form>
);

export default SearchForm;
