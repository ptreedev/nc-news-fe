import Articles from "./Articles"
import { Link } from "react-router-dom"

const Home = () => {
   return (
    <>
        <section>
            <h2>Home</h2>
            <Link to='/articles' element={<Articles />}> <button>Articles</button> </Link><br/>
            <button>Topics</button><br/>
            <button>Feeling Random?</button><br/>
        </section>
    </>
   )
}

export default Home