import { useState } from "react"
import { deleteComment } from "../api"

const DeleteComment = ({ comment_id, setComments }) => {
    const [disabled, setDisabled] = useState(false)
    const [error, setError] = useState(null);
    const handleDelete = () => {
        const errorMsg = "Delete was unsuccesful, please try again."
        setDisabled(true)
        setError(null)
        deleteComment(comment_id)
            .then(() => {
                setDisabled(false);
                setComments((currComments) => {
                    const filtered = currComments.filter((comment) => comment.comment_id !== comment_id)
                    return filtered
                })

            })
            .catch((err) => {
                setDisabled(false)
                setError(errorMsg)
            })
    }
    return (
        <div>
            {error ? <p>{error}</p> : null}
            {disabled ? <p>deleting...</p> : null}
            <button name="delete-comment" onClick={handleDelete} disabled={disabled}>delete</button>
        </div>
    )
}

export default DeleteComment