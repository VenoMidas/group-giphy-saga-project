import { useState } from 'react';

function Search() {
    const [tag, setTag] = useState('');

    const returnSearchResults = () => {
        
    }

    return (
        <div>
            <label>Search</label>
            <input type="text" value={tag} onChange={event => setTag(event.target.value)} />
            <button onClick={returnSearchResults}>Search</button>
        </div>
    );
};

export default Search;