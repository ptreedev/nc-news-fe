import { Link } from "react-router-dom"
const ArticleCard = ({article}) => {
    const linkUrl = `/articles/${article.article_id}`
    return (
        <article className="article-card" key={article.article_id}>
                <img src={article.article_img_url} alt=""/>
            <div className="article-body">
                <h3>{article.title}</h3>
                <p>Topic: {article.topic} </p>
                <p>Votes: {article.votes}</p>
                <Link to={linkUrl}>View Article</Link>
            </div>
        </article>
    )
}

export default ArticleCard