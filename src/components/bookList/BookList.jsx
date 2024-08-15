export default function BookList() {
    return (
        <section id="catalog-page">
            <h1>All Book Reviews</h1>

            <div className="allBooks">
                <div className="allBooks-info">
                    <img src="./images/book1.png" alt="Book 1" />
                    <h6>Mystery</h6>
                    <h2>Book Title 1</h2>
                    <a href="#" className="details-button">Details</a>
                </div>
            </div>
            <div className="allBooks">
                <div className="allBooks-info">
                    <img src="./images/book2.png" alt="Book 2" />
                    <h6>Fantasy</h6>
                    <h2>Book Title 2</h2>
                    <a href="#" className="details-button">Details</a>
                </div>
            </div>
            <div className="allBooks">
                <div className="allBooks-info">
                    <img src="./images/book3.png" alt="Book 3" />
                    <h6>Sci-Fi</h6>
                    <h2>Book Title 3</h2>
                    <a href="#" className="details-button">Details</a>
                </div>
            </div>


            <h3 className="no-articles">No reviews available</h3>
        </section>
    );
}