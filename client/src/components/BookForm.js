import { React } from "react";
import "./BookForm.css";
import "./content.css";


const BookForm = () => {
    return (
        <div class="center">
            <form action="http://localhost:3000/api/book/" method="POST">
                <input id="name" type="text" name="name" placeholder="Book title" />
                <input id="author" type="text" name="author" placeholder="Author" />
                <input id="pages" type="number" name="pages" placeholder="Number of pages" />
                <input id="submit" class="button" type="submit" />
            </form>
        </div>
    )
};

export default BookForm;
