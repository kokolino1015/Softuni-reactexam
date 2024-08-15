export default function CreateBook() {
   return (
    <section id="create-page" class="auth">
    <form id="create">
        <div class="container">

            <h1>Add Book Review</h1>
            <label for="book-title">Book Title:</label>
            <input type="text" id="title" name="title" placeholder="Enter book title..." />

            <label for="author">Author:</label>
            <input type="text" id="author" name="author" placeholder="Enter author name..."/>

            <label for="genre">Genre:</label>
            <input type="text" id="genre" name="genre" placeholder="Enter book genre..."/>

            <label for="book-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..."/>

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary"></textarea>
            <input class="btn submit" type="submit" value="Add Review"/>
        </div>
    </form>
</section>
   );
}