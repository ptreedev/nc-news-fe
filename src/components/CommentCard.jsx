import { useState } from "react"
import formatDate from "../utilities/formatDate"
import DeleteComment from "./DeleteComment"
const CommentCard = ({ comment, setComments }) => {
    const user = "jessjelly"

    return (
        <article className="comment-card" key={comment.comment_id}>
            <div className="comment-header">
                <p>{comment.author} || {formatDate(comment.created_at)}</p>
            </div>
            <div className="comment-body">
                <p>{comment.body}</p>
            </div>
            <div className="comment-footer">
                <p> votes: {comment.votes} </p> 
                {comment.author === user ? <DeleteComment comment_id={comment.comment_id} setComments={setComments}/> : null}
            </div>
        </article>
    )
}

export default CommentCard