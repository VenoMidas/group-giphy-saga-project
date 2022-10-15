import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Favorite() {

    const dispatch = useDispatch();

    // const favoriteArray = useSelector(store => store.favoriteList);

    useEffect(() => {
        console.log('page load');
    }, []);



    return (
        <h2>Favorites Here</h2>
        // <div>
        //     <section className="favGifs">

        //         <h2>FAVORITE GIFS</h2>
        //         <>
        //         {favoriteArray.map(favGif => {

        //             return (
        //                 <div key={favGif.id} >
        //                     {/* url will need to be set when favorites table is created */}
        //                     <img src={favGif.url} />  

        //                 </div>
        //             );
        //         })}
        //         </>
        //     </section>
        // </div>
    )






}

export default Favorite;