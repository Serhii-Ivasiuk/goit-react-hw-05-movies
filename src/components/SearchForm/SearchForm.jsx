// Libs
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
// Styled components
import {
  SaerchForm,
  SaerchFormLabel,
  SearchFormInput,
  SearchFormBtn,
  SearchFormBtnLabel,
} from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const searchValue = searchParams.get('query') ?? '';

    setQuery(searchValue);
  }, [searchParams]);

  const handleChange = evt => {
    setQuery(evt.target.value);
  };

  return (
    <SaerchForm onSubmit={onSubmit}>
      <SaerchFormLabel>
        <SearchFormInput
          type="text"
          name="searchInput"
          autoComplete="off"
          placeholder="Search movies"
          autoFocus
          onChange={handleChange}
          value={query}
        />
      </SaerchFormLabel>
      <SearchFormBtn type="submit">
        <SearchFormBtnLabel>Search</SearchFormBtnLabel>
      </SearchFormBtn>
    </SaerchForm>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
