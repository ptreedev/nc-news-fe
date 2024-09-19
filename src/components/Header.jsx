import { Link } from "react-router-dom"

const Header = ({setUrl}) => {
    const handleClick = ()=> {
        setUrl('/articles')
    }
    return (
        <>
        <header>
            <h1>NC-News</h1>
            <nav>
        <Link to="/">Home</Link>
        <Link to="/articles" onClick={handleClick}> Articles </Link>
        <Link to="/topics"> Topics </Link>
            </nav>
        </header>
        </>
    )
}

export default Header