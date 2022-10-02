- [ ] index.js
    - [ ] watcher saga contains...
        - [ ] `FETCH_GIPHY` - call `fetchGiphy`
        - [ ] `FETCH_FAVORITE` - call `fetchFavorite`
        - [ ] `UPDATE_CATEGORY` - call `updateCategory`
    - [ ] function* (functions being watched)
        - [ ] `fetchGiphy` - dispatch `SET_GIPHY`
            - [ ] const `giphyArray` = yeild axios GET from giphy apy
            - [ ] send `payload: giphyArray.data`
        - [ ] `fetchFavorite` - dispatch `SET_FAVORITE`
            - [ ] const `favoriteArray` = yeild axios GET from /api/favorite
            - [ ] send `payload: favoriteArray.data`
        - [ ] `updateCategory` will yield axios.put to /api/favorite/:id
        - [ ] dispatch `FETCH_FAVORITE`
    - [ ] reducers
        - [ ] const `giphyList`  
            - [ ] action.type `SET_GIPHY`
            - [ ] return action.payload
        - [ ] const `favoriteList`
            - [ ] action.type `SET_FAVORITE`
            - [ ] return action.payload

- [ ] `Search` view
    - [ ] Create _component_
    - [ ] _Input_ that takes a string
    - [ ] Query search endpoint ???
        - [ ]  A `GET` that displays LIMIT 10? of results
        - [ ] `FETCH_GIPHY` dispatch
    - [ ] Display on DOM
        - [ ] `giphyList` from redux store
            - [ ] const `giphyArray` = useSelector `store.giphyList`
            - [ ] mapped into own component

- [ ] `SearchResultItem`
    - [ ] Button for "favorite" image goes on returned components
        - [ ] What info to save for favorites view
        - [ ] `POST` to `/api/favorite`

- [ ] `Favorite` view
    - [ ] display only users favorited images
        - [ ] `GET` all from `/api/favorite`
        - [ ] `FETCH_FAVORITE` dispatch
    - [ ] Display on DOM
        - [ ] `favoriteList` from redux store
            - [ ] const favoriteArray = useSelector `store.favoriteList`
    - [ ] category selector
        - [ ] input type of a select dropdown
            - [ ] options match whats on server categories table
        - [ ] Submit button    
            - [ ] `PUT` to `/api/category`
            - [ ] `UPDATE_CATEGORY` dispatched
            - [ ] each image can only have one category
            - [ ] needs to exist in the DB

- [ ] Database structure 
    - [ ] user clicks "favorite" and the id? of the gif needs to tie to the user, (1 (user) to many (gifs))
    - [ ] `category` table exists
        - [ ] gifs can have at least 1 category
    - [ ] `giphy_image` table
    - [ ] `favorite` table if only 1 user, otherwise `user` table
    - [ ] ERD for tables
        - [ ] `favorite` 1 (favorite) to many (giphy_image)
        - [ ] `giphy_image` many (giphy_image) to one (category) limit of one `category` per favorite image

##
- [ ] Design UI layout for search view
- [ ] Design UI layout for favorites view
- [ ] Setup ERD for table relations

FETCH from a component - that calls a functions
inside the called function you dispatch a SET - goes to reducer