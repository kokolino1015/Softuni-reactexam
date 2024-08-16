import requester from './requester'

const BASE_URL = 'http://localhost:3030/data/movies'
export const getAll = async () => {
    
    const result = await requester.get(BASE_URL)
    const games = Object.values(result);
    return games

}

export const getOne = (movieId) => requester.get(`${BASE_URL}/${movieId}`)

export const create = (movieData) => requester.post(`${BASE_URL}`, movieData);

const moviesAPI ={
    getAll,
    getOne,
    create
}
export default moviesAPI