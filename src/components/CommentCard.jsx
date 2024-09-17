import formatDate from "../utilities/formatDate"
const CommentCard = ({ comment }) => {
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
            </div>
        </article>
    )
}

export default CommentCard