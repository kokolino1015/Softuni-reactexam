import { Link } from "react-router-dom";

export default function LatestMovie({ owner_id, title, description, img, _createdOn, _id }) {

    return (

        <div className="movie">
            <div className="image-wrap">
                <img src={img} alt="Book 1" />
            </div>
            <h3>{title}</h3>
            {/* <p>Author: John Doe</p> */}
            <div className="rating">
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
            </div>
            <div className="data-buttons">
                <Link to={`/movie/${_id}/details`} className="btn details-btn">Details</Link>
            </div>
        </div>


    );
}