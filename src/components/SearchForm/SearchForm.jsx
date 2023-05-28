// Libs
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

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
    <form onSubmit={onSubmit}>
      <label>
        <input
          type="text"
          name="searchInput"
          onChange={handleChange}
          value={query}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
