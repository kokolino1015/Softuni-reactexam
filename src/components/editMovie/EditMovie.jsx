import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import moviesAPI from "../../api/moviesAPI";
import { useGetOneMovie } from "../../hooks/useMovies";

const initialValues ={
    title: '',
    img:'',
    description:''
}

export default function EditMovie() {
    const navigate = useNavigate();
    const { movieId } = useParams();
    const [movie, setMovie] = useGetOneMovie(movieId);
    const { values, changeHandler, submitHandler
    } = useForm(Object.assign(initialValues, movie), async (values) => {
        const isConfirmed = confirm(`Are you sure that you want to edit ${movie.title}`);
        if (isConfirmed) {
            await moviesAPI.update(movieId, values);
            navigate(`/movie/${movieId}/details`);
        }
    });
    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={submitHandler}>
                <div className="container">

                    <h1>Edit Movie</h1>
                    <label htmlFor="movie-title">Movie Title:</label>
                    <input type="text" id="title" onChange={changeHandler} name="title" value={values.title} />

                    <label htmlFor="img">Image:</label>
                    <input type="text" id="img" name="img" onChange={changeHandler} value={values.img} />

                    <label htmlFor="description">Description:</label>
                    <textarea name="description" onChange={changeHandler} value={values.description} id="description"></textarea>
                    <input className="btn submit" type="submit" value="Edit Movie" />

                </div>
            </form>
        </section>

    );
}