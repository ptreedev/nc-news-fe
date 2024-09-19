import Articles from "./Articles"
import Topics from "./Topics"
import { Link } from "react-router-dom"

const Home = () => {
   return (
    <>
        <section>
            <h2>Home</h2>
            <Link to='/articles' element={<Articles />}> <button>Articles</button> </Link><br/>
            <Link to='/topics' element={<Topics />}> <button>Topics</button><br/> </Link>
            <button>Feeling Random?</button><br/>
        </section>
    </>
   )
}

export default Home