MEAGHAN
- [X] index.js
    - [X] watcher saga contains...
        - [X] `FETCH_GIPHY` - call `fetchGiphy`
        - [X] `FETCH_FAVORITE` - call `fetchFavorite`
        - [X] `UPDATE_CATEGORY` - call `updateCategory`
    - [X] function* (functions being watched)
        - [X] `fetchGiphy` - dispatch `SET_GIPHY`
            - [X] const `giphyArray` = yeild axios GET from giphy apy
            - [X] send `payload: giphyArray.data`
        - [X] `fetchFavorite` - dispatch `SET_FAVORITE`
            - [X] const `favoriteArray` = yeild axios GET from /api/favorite
            - [X] send `payload: favoriteArray.data`
        - [X] `updateCategory` will yield axios.put to /api/favorite/:id
        - [X] dispatch `FETCH_FAVORITE`
    - [X] reducers
        - [X] const `giphyList`  
            - [X] action.type `SET_GIPHY`
            - [X] return action.payload
        - [X] const `favoriteList`
            - [X] action.type `SET_FAVORITE`
            - [X] return action.payload

MEAGHAN
- [X] Router in App.js
    - [X] Home Page = '/'
    - [X] Favorites Page = '/favorite'
- [X] Add Header Component
  
MARK
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

OSCAR
- [ ] `Favorite` view
    - [ ] display only users favorited images
        - [X] `GET` all from `/api/favorite`
        - [X] `FETCH_FAVORITE` dispatch
    - [ ] Display on DOM
        - [x] `favoriteList` from redux store
            - [x] const favoriteArray = useSelector `store.favoriteList`
    SAVE FOR NEXT WEEK
    - [ ] category selector
        - [ ] input type of a select dropdown
            - [ ] options match whats on server categories table
        - [ ] Submit button    
            - [ ] `PUT` to `/api/category`
            - [ ] `UPDATE_CATEGORY` dispatched
            - [ ] each image can only have one category
            - [ ] needs to exist in the DB

- [ ] Database structure 
  - [ ] ERD plan
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

