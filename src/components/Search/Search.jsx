import { useState } from 'react'; // useState for local state
import { useDispatch, useSelector } from 'react-redux'; // for redux

function Search() {
    const [tag, setTag] = useState('');
    const searchResults = useSelector(store => store.giphyList); // store giphyList from redux
    const dispatch = useDispatch(); // setup dispatch

    const returnSearchResults = () => {
        dispatch({ type: 'FETCH_GIPHY', payload: tag });
    };

    return (
        <div>
            <label>Search</label>
            <input type="text" value={tag} onChange={event => setTag(event.target.value)} />
            <button onClick={returnSearchResults}>Search</button>
            {/* map searchResults here */}
        </div>
    );
};

export default Search;