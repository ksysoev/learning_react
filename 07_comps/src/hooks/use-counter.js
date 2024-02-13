import { useState, useEffect } from 'react';

function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue);

    useEffect(() => {
        console.log('Count is now', count);
    }, [count]);

    const increment = () => {
        setCount(count + 1);
    }

    return {
        count,
        increment
    }
}

export default useCounter;