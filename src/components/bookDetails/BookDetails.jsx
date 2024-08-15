export default function BookDetails() {
    return (
        <section id="book-details">
            <h1>Book Details</h1>
            <div class="info-section">

                <div class="book-header">
                    <img class="book-img" src="images/book1.png" alt="Book" />
                    <h1>Book Title</h1>
                    <span class="author">Author: Jane Doe</span>
                    <p class="genre">Genre: Mystery, Thriller</p>
                </div>

                <p class="text">
                    Synopsis: A captivating story that delves into the mysteries surrounding the protagonist's journey through the unexpected twists of their life, culminating in a dramatic revelation.
                </p>


                <div class="details-comments">
                    <h2>Comments:</h2>
                    <ul>

                        <li class="comment">
                            <p>Content: An enthralling read!</p>
                        </li>
                        <li class="comment">
                            <p>Content: Highly recommended!</p>
                        </li>
                    </ul>

                    <p class="no-comment">No comments yet.</p>
                </div>

                <div class="buttons">
                    <a href="#" class="button">Edit</a>
                    <a href="#" class="button">Delete</a>
                </div>
            </div>


            <article class="create-comment">
                <label>Add new comment:</label>
                <form class="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input class="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

        </section>
    );
}