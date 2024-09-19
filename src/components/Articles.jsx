import { useEffect, useState } from "react"
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";

//select will need state when adding filter functionality

const Articles = ({url}) => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const {topics} = useParams();
    
    useEffect(() => {
        getArticles(topics).then((articles) => {
            setArticles(articles)
            setIsLoading(false)
            
            
        })
        .catch((error) => {
            // add err handling
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [url]);
    if(isLoading) {
        return (
            <div>
                <p>Loading Articles...</p>
                
            </div>
        )
    }
    return (
        <section className="article-list">
            <h2>
                Articles
            </h2>
            <select name="topic_name" id="topic_name" defaultValue="show-all">
                <option value="select_topic" disabled>Filter by topic...</option>
                <option value="show-all">Show All</option>
                <option value="cooking">Cooking</option>
                <option value="coding">Coding</option>
                <option value="football">Football</option>
            </select>
        <ul>
            {articles.map((article) => {
                return <ArticleCard key={article.article_id} article={article} />
            })}
        </ul>
        </ section>
    )
}

export default Articles