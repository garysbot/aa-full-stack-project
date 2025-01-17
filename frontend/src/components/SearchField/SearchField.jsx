import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import searchIcon from '../../static/icons/search-inactive.svg';
import closeIcon from '../../static/icons/close.svg';
import { performSearch, clearSearch } from '../../store/search';
import SearchResultsDropdown from './SearchResultsDropdown';

const SearchField = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const { error, results, searchInitiated, query } = useSelector(state => state.search);

  const handleChange = (event) => {
    const newQuery = event.target.value;
    setInputValue(newQuery);
    if (newQuery) {
      dispatch(performSearch(newQuery)); // Dispatching performSearch action with new query
    } else {
      dispatch(clearSearch()); // Clearing the search when input is empty
    }
  };

  const clearInput = () => {
    setInputValue('');
    dispatch(clearSearch()); // Dispatch Redux action to clear search
  };

  return (
    <>
      <div className='search-input-container'>
        <img src={searchIcon} alt='Search' className="search-icon"/>
        <input
          type='text'
          placeholder='Search for songs or episodes'
          value={inputValue}
          onChange={handleChange}
        />
        <img src={closeIcon} alt='Close' className='close-icon' onClick={clearInput}/>
      </div>
      {error && <p>Error: {error.message}</p>}
      <SearchResultsDropdown query={query} searchResults={results} searchInitiated={searchInitiated}/>
    </>
  );
}

export default SearchField;
