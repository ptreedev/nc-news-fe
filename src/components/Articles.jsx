import { useEffect, useState } from "react"
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";




const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedFilter, setSelectedFilter] = useState('');
    const [selectedSort, setSelectedSort] = useState('sort')
    const [searchParams, setSearchParams] = useSearchParams();
    const sortByQuery = searchParams.get("sort_by");
    const orderQuery = searchParams.get("order");
    console.log(orderQuery)
    const navigate = useNavigate();
    const { topics } = useParams();
    const setSortOrder = (direction) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set("order", direction);
        setSearchParams(newParams);
    };

    const handleSortChange = (event) => {
        setSelectedSort(event.target.value)
        selectedFilter ? navigate(`/${selectedFilter}?sort_by=${event.target.value}`) : navigate(`/articles?sort_by=${event.target.value}`)

    }
    const handleFilterChange = (event) => {
        console.log(event.target.value)
        setSelectedFilter(event.target.value);
        navigate(`/${event.target.value}`)
    };
    useEffect(() => {
        getArticles(topics, sortByQuery, orderQuery).then((articles) => {
            setArticles(articles)
            setIsLoading(false)
            setSelectedFilter(topics)

        })
            .catch((error) => {
                // add err handling
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [topics, sortByQuery, orderQuery]);
    if (isLoading) {
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
            <select name="topic_name" id="topic_name" value={selectedFilter} onChange={handleFilterChange}>
                <option value="select_topic" disabled>Filter by topic...</option>
                <option value="articles">Show All</option>
                <option value="cooking">Cooking</option>
                <option value="coding">Coding</option>
                <option value="football">Football</option>
            </select>
            <select name="sort_by" id="sort_by" value={selectedSort} onChange={handleSortChange}>
                <option value="sort" disabled>Sort</option>
                <option value="title">Title</option>
                <option value="topic">Topic</option>
                <option value="author">Author</option>
                <option value="created_at">Date</option>
                <option value="votes">Votes</option>
                <option value="comment_count">Comment Count</option>
            </select>
            <button onClick={() => setSortOrder("asc")}>Ascending</button>
            <button onClick={() => setSortOrder("desc")}>Descending</button>

            <ul>
                {articles.map((article) => {
                    return <ArticleCard key={article.article_id} article={article} />
                })}
            </ul>
        </ section>
    )
}

export default Articles