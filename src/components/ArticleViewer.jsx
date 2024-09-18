import { useParams } from "react-router-dom"
import { getArticle, patchVotes } from '../api'
import { useEffect, useState } from "react";
import Expandable from "./Expandable";
import CommentsList from "./CommentsList";
import formatDate from "../utilities/formatDate";
import AddComment from "./AddComment";
const ArticleViewer = () => {
    const [currArticle, setCurrArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [voteCount, setVoteCount] = useState(0);
    const [error, setError] = useState(null);
    const [comments, setComments] = useState([]);
    const [commentCount, setCommentCount] = useState(0)
    const { article_id } = useParams();
    useEffect(() => {
        getArticle(article_id)
            .then((article) => {
                setCurrArticle(article)
                setVoteCount(article.votes)
                setCommentCount(article.comment_count)
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
            console.log(typeof event.target.value)
            const vote = Number(event.target.value)
            setVoteCount((currVoteCount) => currVoteCount + vote);
            setError(null)
            patchVotes(article_id, { inc_votes: vote })
                .catch((err) => {
                    setVoteCount((currVoteCount) => currVoteCount - vote);
                    setError(errorMsg)
                })
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
            <p>comments: {commentCount} || votes: {voteCount} </p><button onClick={handleVote} value="-1">downvote</button> <button onClick={handleVote} value="1">upvote</button>
            {error ? <p>{error}</p> : null}
            <Expandable>
            <AddComment setComments={setComments} setCommentCount={setCommentCount}/> 
                <CommentsList comments={comments} setComments={setComments} />
            </Expandable>
        </section>
    )
}

export default ArticleViewer