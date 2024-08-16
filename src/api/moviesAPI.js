import requester from './requester'

const BASE_URL = 'http://localhost:3030/data/movies'
export const getAll = async () => {
    
    const result = await requester.get(BASE_URL)
    const movies = Object.values(result);
    return movies

}

export const getOne = (movieId) => requester.get(`${BASE_URL}/${movieId}`)

export const create = (movieData) => requester.post(`${BASE_URL}`, movieData);

export const remove = (movieId) => requester.del(`${BASE_URL}/${movieId}`);

export const update = (movieId, movieData) => requester.put(`${BASE_URL}/${movieId}`, movieData)


const moviesAPI ={
    getAll,
    getOne,
    create,
    update,
    remove
}
export default moviesAPI