import { useParams } from "react-router-dom"
import { getArticle } from '../api'
import { useEffect, useState } from "react";
const ArticleViewer = () => {
    const [currArticle, setCurrArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const {article_id} = useParams();
    useEffect(() => {
        getArticle(article_id)
        .then((article) => {
            setCurrArticle(article)
        })
        .catch((err) => {
            //err handling
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [currArticle])
    const date = new Date(currArticle.created_at)
    console.log
    return (
        <>
        <h2>
            {currArticle.title}
        </h2>
        <p>written by {currArticle.author} || {date.getUTCDate()}/{date.getUTCMonth() + 1}/{date.getUTCFullYear()}</p>
        <p>{currArticle.body}</p>
        
        </>
    )
}

export default ArticleViewer