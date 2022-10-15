import axios from 'axios';
import { useEffect, useState } from 'react'; // useState for local state
import { useDispatch, useSelector } from 'react-redux'; // for redux
import { useHistory } from 'react-router-dom';

function Search() {
    const [searchTag, setSearchTag] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    // const searchResults = useSelector(store => store.giphyList); // store giphyList from redux
    const dispatch = useDispatch(); // setup dispatch
    const history = useHistory();

    // const returnSearchResults = () => {
    //     dispatch({ type: 'FETCH_GIPHY', payload: tag });
    // };

    // function to load searched gif
    const searchGif = () => {
        axios.get(`/api/search/${searchTag}`).then(response => {
            console.log(response.data.data.images.downsized_medium.url);
            setSearchTag(response.data.data.images.downsized_medium.url);
            setSearchTag('');
        }).catch(e => {
            console.log(e);
            alert('Something went wrong.');
        })
    }

    useEffect(() => {
        console.log('page load.');
    }, []);

    return (
        <div>
            <label>Search</label>
            <input type="text" value={searchTag} onChange={event => setSearchTag(event.target.value)} />
            <button onClick={() => searchGif(searchTag)}>Search</button>
            {searchResults.map(gif => {
                return <>
                    <img src={gif.images.fixed_height.url} />
                </>
            })}
        </div>
    );
};

export default Search;