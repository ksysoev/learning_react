import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';


function useThunk(thunk) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const runThunk = useCallback((args) => {
        setLoading(true);
        dispatch(thunk(args))
            .unwrap()
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [dispatch, thunk]);

    return [runThunk, loading, error];
}

export default useThunk;