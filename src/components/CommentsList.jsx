import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../api";
import CommentCard from "./CommentCard";

const CommentsList = () => {
    const [comments, setComments] = useState([]);
    const [hasComments, setHasComments] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    const { article_id } = useParams();
    useEffect(() => {
        getComments(article_id)
            .then((comments) => {
                setComments(comments)
                setHasComments(true)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])
    if(isLoading){return <p>Loading Comments...</p>}
    return (
        <div>

            {hasComments ?
                <ul>
                    {comments.map((comment) => {
                        return <CommentCard comment={comment} key={comment.comment_id} />
                    })}
                </ul>
                : <p>no comments for this post</p>}
        </div>
    )
}


export default CommentsList