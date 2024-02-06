import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import { useEffect } from 'react';
import useBookContext from './hooks/use-book-context';



function App() {
    const { fetchBooks } = useBookContext();

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    return (
        <div className='app'>
            <h1>Reading List</h1>
            <BookCreate />
            <BookList />
        </div>
    )
}

export default App;