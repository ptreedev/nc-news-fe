import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../api";
import CommentCard from "./CommentCard";

const CommentsList = () => {
    const [comments, setComments] = useState([]);
    const {article_id} = useParams();
    useEffect(() => {
        getComments(article_id)
        .then((comments) => {
            setComments(comments)
        })
        .catch((error) => {
            //error handling
        })
        .finally(() => {

        })
    }, [])
    return (
        <ul>
            {comments.map((comment) => {
                return <CommentCard comment={comment} key={comment.comment_id}/>
            })}
        </ul>
    )
}

export default CommentsList