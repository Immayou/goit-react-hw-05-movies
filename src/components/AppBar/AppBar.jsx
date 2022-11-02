import { Link } from "react-router-dom"
import { Layout } from "./AppBar.styled"

// const navItems = [
//   {href:'home', text:'Home'},
//   {href:'movies', text:'Movies'}
// ]

export const AppBar = () => {
 return (
    <Layout>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
    </Layout>
 )
}