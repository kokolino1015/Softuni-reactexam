import { useEffect, useState } from "react"
import moviesAPI from "../api/moviesAPI"


export function useGetAllMovies(){
    const [movies, setMovies] = useState([])

    useEffect(() => {
        moviesAPI.getAll()
            .then(result => setMovies(result))
    }, [])
    return [movies, setMovies]
}
export function useGetOneMovie(movieId){
    const [movies, setMovies] = useState({});
    useEffect(() => {
        (async () => {
            const result = await moviesAPI.getOne(movieId);
            setMovies(result);
        })();
    }, [movieId])
    return [
        movies, setMovies
    ]
}
export function useCreateMovie(){
    const movieCreateHandler = async(movieData)=>{
        return await moviesAPI.create(movieData)
    }
    return movieCreateHandler;
}