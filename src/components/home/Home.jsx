import { useEffect, useState } from "react";
import moviesAPI from "../../api/moviesAPI";
import LatestMovie from "./latestMovie/LatestMovie";

export default function Home() {
    const [latestMovies, setLatestMovies] = useState([])
    useEffect(()=>{
        (async ()=>{
            const result = await moviesAPI.getAll();
            setLatestMovies(result.reverse().slice(0, 3))
        })()
    }, [])
    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>Explore New Movies</h2>
                <h3>Find your next favorite watch</h3>
            </div>
            {/* <img src="./images/books_banner.png" alt="hero" /> */}

                <div id="home-page">
                    <h1>Latest Movies</h1>

                    {latestMovies.length > 0
                        ? latestMovies.map(movie=><LatestMovie key={movie._id} {...movie}/>)
                        : <p className="no-articles">No movies yet</p>
                   }

                    
                    <p className="no-articles">No reviews yet</p>
                </div>
        </section>
    );
}