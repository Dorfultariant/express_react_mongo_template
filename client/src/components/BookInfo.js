import { React } from "react";


const BookInfo = ({ author, name, pages }) => {
    return (
        <div>
            <h3>Books</h3>
            <h4>{name}</h4>
            <p>{author}</p>
            <p>{pages}</p>
        </div>
    );
};

export default BookInfo;
