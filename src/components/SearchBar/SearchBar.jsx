import { ButtonIcon, SearchBox } from '../Styles/Element.styled';
import { BsSearchHeart } from 'react-icons/bs';
import SearchForm from './SearchForm';
import SearchInput from './SearchInput.jsx';

export const SearchBar = ({ onSubmit }) => (
  <SearchBox>
    <SearchForm onSubmit={onSubmit}>
      <SearchInput />
      <ButtonIcon type="submit" aria-label="search button">
        <BsSearchHeart />
      </ButtonIcon>
    </SearchForm>
  </SearchBox>
);
