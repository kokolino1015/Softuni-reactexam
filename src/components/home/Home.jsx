export default function Home() {
    return (
        <section id="welcome-world">

            <div class="welcome-message">
                <h2>Explore New Books</h2>
                <h3>Find your next favorite read</h3>
            </div>
            <img src="./images/books_banner.png" alt="hero" />

                <div id="home-page">
                    <h1>Latest Reviews</h1>

                    <div class="book">
                        <div class="image-wrap">
                            <img src="./images/book1.png" alt="Book 1" />
                        </div>
                        <h3>Book Title 1</h3>
                        <p>Author: John Doe</p>
                        <div class="rating">
                            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                        </div>
                        <div class="data-buttons">
                            <a href="#" class="btn details-btn">Details</a>
                        </div>
                    </div>
                    <div class="book">
                        <div class="image-wrap">
                            <img src="./images/book2.png" alt="Book 2"  />
                        </div>
                        <h3>Book Title 2</h3>
                        <p>Author: Jane Smith</p>
                        <div class="rating">
                            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                        </div>
                        <div class="data-buttons">
                            <a href="#" class="btn details-btn">Details</a>
                        </div>
                    </div>
                    <div class="book">
                        <div class="image-wrap">
                            <img src="./images/book3.png" alt="Book 3" />
                        </div>
                        <h3>Book Title 3</h3>
                        <p>Author: Emily Johnson</p>
                        <div class="rating">
                            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                        </div>
                        <div class="data-buttons">
                            <a href="#" class="btn details-btn">Details</a>
                        </div>
                    </div>

                    
                    <p class="no-articles">No reviews yet</p>
                </div>
        </section>
    );
}