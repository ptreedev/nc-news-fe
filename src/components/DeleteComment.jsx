import { useState } from "react"
import { deleteComment } from "../api"

const DeleteComment = ({ comment_id, setComments }) => {
    const [disabled, setDisabled] = useState(false)
    const handleDelete = () => {
        setDisabled(true)
        deleteComment(comment_id)
            .then(() => {
                setDisabled(false);
                setComments((currComments) => {
                    const filtered = currComments.filter((comment) => comment.comment_id !== comment_id)
                    return filtered
                })

            })
            .catch((err) => {
                //error handling
            })
    }
    return (
        <div>
            {disabled ? <p>deleting...</p> : null}
            <button name="delete-comment" onClick={handleDelete} disabled={disabled}>delete</button>
        </div>
    )
}

export default DeleteComment