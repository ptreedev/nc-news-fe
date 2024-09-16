
const ArticleCard = ({article}) => {
    return (
        <article className="article-card">
                <img src={article.article_img_url} alt=""/>
            <div className="article-body">
                <h3>{article.title}</h3>
                <p>Topic: {article.topic} </p>
                <p>Votes: {article.votes}</p>
                <button className="article-card-button">View Article</button>
            </div>
        </article>
    )
}

export default ArticleCard