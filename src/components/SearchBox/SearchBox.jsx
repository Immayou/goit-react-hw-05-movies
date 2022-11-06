import { FiLoader } from "react-icons/fi";
import { SearchForm, SearchFormButton, SearchFormInput } from "./SearchBox.styled"

export const SearchBox = () => {
    return (
        <SearchForm>
        <SearchFormButton type="submit"><FiLoader size='20px'/>
        </SearchFormButton>
    <SearchFormInput
    type="text"
    autoComplete="off"
    autoFocus
    placeholder="Search images and photos"
    // onChange={changeQuery}
/>
</SearchForm>
    )
}