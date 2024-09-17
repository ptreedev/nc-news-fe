import { useState } from "react"
import { postComment } from "../api";
import { useParams } from "react-router-dom";

const AddComment = () => {
    const [commentBody, setCommentBody] = useState("");
    const {article_id} = useParams();
    const handleChange = (event) => {
        setCommentBody(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const postObj = {
            username: "jessjelly",
            body: commentBody
        }
        postComment(article_id, postObj);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="comment">Add your comment here: </label>
            <input type="text" id="comment" name="comment" onChange={handleChange} value={commentBody}/>
            <input type="submit"/>
        </form>
    )
}

export default AddComment