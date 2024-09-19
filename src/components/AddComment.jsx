import { useState } from "react"
import { postComment } from "../api";
import { useParams } from "react-router-dom";

const AddComment = ({setComments, setCommentCount}) => {
    const [commentBody, setCommentBody] = useState("");
    const [disabled, setDisabled] = useState(true)
    const [posting, setPosting] = useState(false)
    const [error, setError] = useState(null);
    const { article_id } = useParams();
    const handleChange = (event) => {
        setCommentBody(event.target.value)
        setDisabled(false)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const errorMsg = "Your comment was unsuccessful, please try again."
        setDisabled(true);
        setPosting(true);
        setError(null)
        const postObj = {
            username: "jessjelly",
            body: commentBody
        }
        postComment(article_id, postObj).then((newComment) => {
            setComments((currComments) => [newComment, ...currComments])
            setCommentCount((currCommentCount) => Number(currCommentCount) + 1)
            setDisabled(false);
            setPosting(false);
            setCommentBody("")
        })
        .catch((err) => {
            setPosting(false);
            setError(errorMsg)
        })
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <label htmlFor="comment">Comment: </label>
                <input type="text" id="comment" name="comment" onChange={handleChange} value={commentBody} />
                <input type="submit" value="submit" disabled={disabled} />
            </form>
            {posting ? <p>posting comment...</p> : null}
            {error ? <p>{error}</p> : null}
        </section>
    )
}

export default AddComment