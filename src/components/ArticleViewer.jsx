import { useParams } from "react-router-dom"
import { getArticle, patchVotes } from '../api'
import { useEffect, useState } from "react";
import Expandable from "./Expandable";
import CommentsList from "./CommentsList";
import formatDate from "../utilities/formatDate";
const ArticleViewer = () => {
    const [currArticle, setCurrArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [voteCount, setVoteCount] = useState(0);
    const [error, setError] = useState(null);
    const { article_id } = useParams();
    useEffect(() => {
        getArticle(article_id)
            .then((article) => {
                setCurrArticle(article)
                setVoteCount(article.votes)
            })
            .catch((err) => {
                //err handling
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, []);

    const handleVote = (event) => {
        const errorMsg = "Your vote was unsuccessful, please try again."
        if (event.target.value === "up") {
            setVoteCount((currVoteCount) => currVoteCount + 1);
            setError(null)
            patchVotes(article_id, { inc_votes: 1 })
                .catch((err) => {
                    setVoteCount((currVoteCount) => currVoteCount - 1);
                    setError(errorMsg)
                })
        } else if (event.target.value === "down"){

            setVoteCount((currVoteCount) => currVoteCount - 1);
        setError(null)
        patchVotes(article_id, { inc_votes: -1 })
            .catch((err) => {
                setVoteCount((currVoteCount) => currVoteCount + 1);
                setError(errorMsg)
            })
        }

    }

    if (isLoading) {
        return <p>Loading Article...</p>
    };


    return (
        <section className="single-article">
            <h2>
                {currArticle.title}
            </h2>
            <p>written by {currArticle.author} || {formatDate(currArticle.created_at)} || {currArticle.topic}</p>
            <img src={currArticle.article_img_url} />
            <article>{currArticle.body}</article>
            <p>comments: {currArticle.comment_count} || votes: {voteCount} </p><button onClick={handleVote} value="down">downvote</button> <button onClick={handleVote} value="up">upvote</button>
            <Expandable>
                <CommentsList />
            </Expandable>

        </section>
    )
}

export default ArticleViewer