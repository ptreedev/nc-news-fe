import { getTopics } from "../api"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Topics = () => {
    const [topics, setTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getTopics()
        .then((topics) => {
            setIsLoading(false)
            setTopics(topics)
        })
        .catch((err) => {
            //err
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [])
    
    if(isLoading) {
        return (
            <div>
                <p>Loading Topics...</p>
                
            </div>
        )
    }
    return (
        <section>
            <h2>Topics</h2>
            <ul>
                {topics.map((topic, i) => {
                    return (
                    <section key={i} className="topic-card">
                        <h3 >{topic.slug[0].toUpperCase() + topic.slug.slice(1)}</h3>
                        <p> {topic.description} </p>
                        <Link to={`/${topic.slug}`} > View Articles </Link>
                    </section>)
                })}
            </ul>
        </section>
    )
}

export default Topics