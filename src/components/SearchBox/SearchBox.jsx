// import { useState } from "react";
import { FiLoader } from "react-icons/fi";
import { SearchForm, SearchFormButton, SearchFormInput } from "./SearchBox.styled"

export const SearchBox = ({onChange}) => {
    // const [inputQuery, setInputQuery] = useState('');

    // const inputHandler = e => {
    //     setInputQuery (e.currentTarget.value.toLowerCase())
    // }
    
    // const formSubmitHandler = e => {
    //     e.preventDefault();
    // if (inputQuery.trim() !== '') {
    //   onSubmit(inputQuery)}
    // }

    return (
        <SearchForm>
        <SearchFormButton type="submit"><FiLoader size='20px'/>
        </SearchFormButton>
    <SearchFormInput
    type="text"
    autoComplete="off"
    autoFocus
    placeholder="Search images and photos"
    onChange={e => onChange(e.target.value.toLowerCase())}
/>
</SearchForm>
    )
}