import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../api";
import CommentCard from "./CommentCard";

const CommentsList = ({ comments, setComments, hasComments, setHasComments, setCommentCount }) => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { article_id } = useParams();
    useEffect(() => {
        getComments(article_id)
            .then((comments) => {
                setComments(comments)
                setHasComments(true)
                setError(null)
            })
            .catch((error) => {
                setError("Could not load comments at this time")
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [setComments])
    if (isLoading) { return <p>Loading Comments, this may take a while when first loading...</p> }
    return (
        <section>
            {
                error ? <p>{error}</p> : <article>
                    {hasComments ?
                        <ul>
                            <div className="comment-wrapper">
                                {comments.map((comment) => {
                                    return <CommentCard comment={comment} key={comment.comment_id} setComments={setComments} setHasComments={setHasComments} setCommentCount={setCommentCount} />
                                })}

                            </div>
                        </ul>
                        : <p>no comments for this post</p>}
                </article>

            }
        </section>
    )
}


export default CommentsList