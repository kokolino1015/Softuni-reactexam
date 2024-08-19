import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetOneMovie } from "../../hooks/useMovies";
import { useContext, useState } from "react";
import { useCreateComment, useGetAllComments } from "../../hooks/useComments";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import moviesAPI from "../../api/moviesAPI";

const initialValues = {
    comment: ''
}

export default function MovieDetails() {
    const navigate = useNavigate();
    const { movieId } = useParams();
    const [comments, dispatch] = useGetAllComments(movieId);
    const createComment = useCreateComment();
    const { email, userId, isAuthenticated } = useContext(AuthContext);
    const [movie, setmovie] = useGetOneMovie(movieId)
    const { values, changeHandler, submitHandler
    } = useForm(initialValues, async ({ comment }) => {

        try {
            const newComment = await createComment(movieId, comment);
            dispatch({ type: "ADD_COMMENT", payload: { ...newComment, author: { email } } })
        } catch (err) {
            console.log(err.message)
        }
    })
    const movieDeleteHandler = async () => {
        try {
            const isConfirmed = confirm(`Are you sure that you want to delete ${movie.title}`);
            if (isConfirmed) {
                await moviesAPI.remove(movieId);
                navigate('/');
            }
        } catch (err) {
            console.log(err.message);
        }

    }
    const isOwner = userId === movie._ownerId;
    return (
        <section id="movie-details">
            <h1>Movie Details</h1>
            <div className="info-section">

                <div className="movie-header">
                    <img className="movie-img" src={movie.img} alt="movie" />
                    <h1>{movie.title}</h1>

                </div>

                <p className="text">
                    {movie.description}
                </p>


                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>

                        {comments.map(comment => (
                            <li key={comment._id} className="comment">
                                <p>{comment.author.email}: {comment.text}</p>
                            </li>))
                        }
                        {comments.length === 0 && <p className="no-comment">No comments yet.</p>}
                    </ul>
                </div>

                {isOwner && <div className="buttons">
                    <Link to={`/movie/${movieId}/edit`} className="button">Edit</Link>
                    <a href="#" onClick={movieDeleteHandler} className="button">Delete</a>
                </div>}
            </div>

            {isAuthenticated && <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={submitHandler}>
                    <textarea name="comment" value={values.comment} onChange={changeHandler} placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>}

        </section>
    );
}