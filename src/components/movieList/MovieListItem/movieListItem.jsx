import { Link } from "react-router-dom";

export default function MovieListItem({owner_id, title, description, img, _createdOn, _id}) {
    return (
        <div className="allMovies">
            <div className="allMovies-info">
                <img style={{maxWidth:'400px'}}src={img} alt="Movie" />
                <h6>{description}</h6>
                <h2>{title}</h2>
                <Link to={`/movie/${_id}/details`} className="details-button">Details</Link>
            </div>
        </div>
    );
}