import { createContext, useState } from 'react';
import axios from 'axios';

const BooksContext = createContext();

function BooksProvider({ children }) {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');

        if (response.status !== 200) {
            console.log('Error fetching books');
            return;
        }

        setBooks(response.data);
    }



    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', { title });

        if (response.status !== 201) {
            console.log('Error creating book');
            return;
        }

        setBooks([...books, response.data]);
    }

    const deleteBook = async (id) => {
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
        <BooksContext.Provider value={{ books, createBook, deleteBook, updateBook, fetchBooks }}>
            {children}
        </BooksContext.Provider>
    )
}

export { BooksProvider };

export default BooksContext;