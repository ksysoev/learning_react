import { useState } from 'react';
import useBookContext from '../hooks/use-book-context';

function BookEdit({ book, onUpdate }) {
    const { updateBook } = useBookContext();
    const [title, setTitle] = useState(book.title);

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        updateBook(book.id, title);
        onUpdate();
    }

    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" type="text" value={title} onChange={handleChange} />
            <button className="button is-primary" type="submit">Save</button>
        </form>
    )
}

export default BookEdit;