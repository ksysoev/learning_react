import { useState } from 'react';

import BookCreate from './components/BookCreate';
import BookList from './components/BookList';


function App() {
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        setBooks([...books, { id: Math.round(Math.random() * 9999), title }]);
    }

    const deleteBookById = (id) => {
        setBooks(books.filter(book => book.id !== id));
    }

    const updateBook = (id, title) => {
        setBooks(books.map(book => {
            if (book.id === id) {
                return { ...book, title };
            }
            return book;
        }));
    }

    return (
        <div className='app'>
            <h1>Reading List</h1>
            <BookCreate onCreate={createBook} />
            <BookList books={books} onDelete={deleteBookById} onUpdate={updateBook} />
        </div>
    )
}

export default App;