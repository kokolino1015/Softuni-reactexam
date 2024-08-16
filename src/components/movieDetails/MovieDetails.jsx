import { useParams } from "react-router-dom";
import { useGetOneMovie } from "../../hooks/useMovies";
import { useState } from "react";

export default function MovieDetails() {
    const { movieId } = useParams();
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('')
    const [movie, setMovie] = useGetOneMovie(movieId);

    const commentSubmitHandler = async (e) => {
        e.preventDefault();
        const newComment = await commentsApi.create(movieId, username, comment)

        setMovie(prevState => ({
            ...prevState,
            comments: {
                ...prevState.comments,
                [newComment._id]: newComment,
            }
        }))
        setUsername('')
        setComment('')
    }
    return (
        <section id="movie-details">
            <h1>Movie Details</h1>
            <div className="info-section">

                <div className="movie-header">
                    <img className="movie-img" src={movie.img} alt="movie" />
                    <h1>{movie.title}</h1>
                    {/* <span className="author">Author: Jane Doe</span>
                    <p className="genre">Genre: Mystery, Thriller</p> */}
                </div>

                <p className="text">
                    {movie.description}
                </p>


                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>

                        <li className="comment">
                            <p>Content: An enthralling read!</p>
                        </li>
                        <li className="comment">
                            <p>Content: Highly recommended!</p>
                        </li>
                    </ul>

                    <p className="no-comment">No comments yet.</p>
                </div>

                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div>
            </div>

            {/* <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={commentSubmitHandler}>
                    <textarea name="comment" value={comment} placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article> */}

        </section>
    );
}