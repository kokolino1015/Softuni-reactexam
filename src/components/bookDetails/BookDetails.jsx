export default function BookDetails() {
    return (
        <section id="book-details">
            <h1>Book Details</h1>
            <div className="info-section">

                <div className="book-header">
                    <img className="book-img" src="images/book1.png" alt="Book" />
                    <h1>Book Title</h1>
                    <span className="author">Author: Jane Doe</span>
                    <p className="genre">Genre: Mystery, Thriller</p>
                </div>

                <p className="text">
                    Synopsis: A captivating story that delves into the mysteries surrounding the protagonist's journey through the unexpected twists of their life, culminating in a dramatic revelation.
                </p>


                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>

                        <li className="comment">
                            <p>Content: An enthralling read!</p>
                        </li>
                        <li className="comment">
                            <p>Content: Highly recommended!</p>
                        </li>
                    </ul>

                    <p className="no-comment">No comments yet.</p>
                </div>

                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div>
            </div>


            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

        </section>
    );
}