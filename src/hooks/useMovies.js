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
    const [movie, setMovie] = useState({
        title: '',
        imageUrl: '',
        description: "",
    });
    useEffect(() => {
        (async () => {
            const result = await moviesAPI.getOne(movieId);
            setMovie(result);
        })();
    }, [movieId])
    return [
        movie, 
        setMovie
    ]
}
export function useCreateMovie(){
    const movieCreateHandler = async(movieData)=>{
        return await moviesAPI.create(movieData)
    }
    return movieCreateHandler;
}