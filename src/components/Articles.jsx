import { useEffect, useState } from "react"
import getArticles from "../api";
import ArticleCard from "./ArticleCard";

//select will need state when adding filter functionality

const Articles = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        getArticles().then(({data: {articles}}) => {
            setArticles(articles)
        })
    }, []);
    return (
        <section className="article-list">
            <h2>
                Articles
            </h2>
            <select name="topic_name" id="topic_name" defaultValue="select_topic">
                <option value="select_topic" disabled>Filter by topic...</option>
                <option value="">Show All</option>
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