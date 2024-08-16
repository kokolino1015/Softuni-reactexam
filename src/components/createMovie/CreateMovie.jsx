import { useNavigate } from "react-router-dom";
import { useCreateMovie } from "../../hooks/useMovies";
import { useForm } from "../../hooks/useForm";

export default function CreateMovie() {
    const navigate = useNavigate();
    const createGame = useCreateMovie();

    const intialValues ={
        title: '',
        description: '',
        img: '',
    };
    const createHandler = async(values)=>{
        try{
            const {_id: movieId} =  await createGame(values);
            navigate(`/movie/${movieId}/details`)
        }catch(err){
            console.log(err.message)
        }
        
    }
    const {values, submitHandler, changeHandler

    } =  useForm(intialValues, createHandler)
   return (
    <section id="create-page" className="auth">
    <form id="create" onSubmit={submitHandler}>
        <div className="container">

            <h1>Add Movie</h1>
            <label htmlFor="book-title">Movie Title:</label>
            <input type="text" value={values.title} onChange={changeHandler} id="title" name="title" placeholder="Enter movie title..." />

            {/* <label htmlFor="author">Author:</label>
            <input type="text" id="author" name="author" placeholder="Enter author name..."/>

            <label htmlFor="genre">Genre:</label>
            <input type="text" id="genre" name="genre" placeholder="Enter book genre..."/> */}

            <label htmlFor="book-img">Image:</label>
            <input type="text" value={values.img} onChange={changeHandler} id="img" name="img" placeholder="Upload a photo..."/>

            <label htmlFor="description">Description:</label>
            <textarea value={values.description} onChange={changeHandler} name="description" id="description"></textarea>
            <input className="btn submit" type="submit" value="Add Movie"/>
        </div>
    </form>
</section>
   );
}