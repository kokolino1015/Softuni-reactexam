export default function Header() {
    return (
        <>
            <header>

                <h1><a class="home" href="#">BookReview</a></h1>
                <nav>
                    <a href="#">All Reviews</a>

                    <div id="user">
                        <a href="#">Add Review</a>
                        <a href="#">Logout</a>
                    </div>
                    <div id="guest">
                        <a href="#">Login</a>
                        <a href="#">Register</a>
                    </div>
                </nav>
            </header>
        </>
    )
}
