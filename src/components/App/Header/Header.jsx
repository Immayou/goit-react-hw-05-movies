import { HeaderBox } from "./Header.styled"

export const Header = ({children}) => {
 return (
    <HeaderBox>
        {children}
    </HeaderBox>
 )
}