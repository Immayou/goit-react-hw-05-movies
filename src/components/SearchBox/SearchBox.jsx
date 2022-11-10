import { useState } from "react";
import PropTypes from 'prop-types';
import { FiLoader } from "react-icons/fi";
import { SearchForm, SearchFormButton, SearchFormInput } from "./SearchBox.styled"

export const SearchBox = ({onChange}) => {
const [inputQuery, setInputQuery] = useState('');

const inputHandler = e => {
setInputQuery (e.currentTarget.value.toLowerCase())
}
    
const formSubmitHandler = e => {
e.preventDefault();
onChange(inputQuery);
}

return (
    <SearchForm onSubmit={formSubmitHandler}>
      <SearchFormInput
    type="text"
    autoComplete="off"
    autoFocus
    placeholder="Search movies by title"
    onChange={inputHandler}
    />
      <SearchFormButton type="submit"><FiLoader size='20px'/>
      </SearchFormButton>
</SearchForm>
    )
}

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired
}