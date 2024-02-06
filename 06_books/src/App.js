import { useState, useEffect } from 'react';

import axios from 'axios';

import BookCreate from './components/BookCreate';
import BookList from './components/BookList';


function App() {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');

        if (response.status !== 200) {
            console.log('Error fetching books');
            return;
        }

        setBooks(response.data);
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', { title });

        if (response.status !== 201) {
            console.log('Error creating book');
            return;
        }

        setBooks([...books, response.data]);
    }

    const deleteBookById = async (id) => {
        const response = await axios.delete(`http://localhost:3001/books/${id}`);

        if (response.status !== 200) {
            console.log('Error deleting book');
            return;
        }

        setBooks(books.filter(book => book.id !== id));
    }

    const updateBook = async (id, title) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, { title });

        if (response.status !== 200) {
            console.log('Error updating book');
            return;
        }

        setBooks(books.map(book => {
            if (book.id === id) {
                return response.data;
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