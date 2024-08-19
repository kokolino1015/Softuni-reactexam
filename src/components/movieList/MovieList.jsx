import { useGetAllMovies } from '../../hooks/useMovies';
import MovieListItem from './MovieListItem/movieListItem';


export default function MovieList() {
    const [movies] = useGetAllMovies();
    console.log(movies)
    return (
        <section id="catalog-page">
            <h1>All Movies</h1>

            
            {movies.length > 0
                ? movies.map(movie => <MovieListItem key={movie._id} {...movie}/>)
                :<h3 className="no-articles">No movies yet</h3>
            }

        </section>
    );
}