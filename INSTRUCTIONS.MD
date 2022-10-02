- [ ] index.js
    - [ ] watcher saga contains...
        - [ ] `FETCH_GIPHY` - call `fetchGiphy`
    - [ ] function* (functions being watched)
        - [ ] `fetchGiphy` - dispatch `SET_GIPHY`
    - [ ] reducers
        - [ ] const `giphyList`  
            - [ ] action.type `SET_GIPHY`

- [ ] `Search` view
    - [ ] Create _component_
    - [ ] _Input_ that takes a string
    - [ ] Query search endpoint ???
        - [ ] ?? A `GET` that displays LIMIT 10 of results
        - [ ] `FETCH_GIPHY` dispatch
    - [ ] Display on DOM
        - [ ] `giphyList` from redux store
            - [ ] const `giphyArray` = useSelector `store.giphyList`
            - [ ] mapped into own component

- [ ] `SearchResultItem`
    - [ ] Button for "favorite" image goes on returned components
        - [ ] What info to save for favorites view
        - [ ] `POST` to `/api/favorite`

- [ ] Favorite view
    - [ ] display only users favorited images
        - [ ] `GET` from `/api/favorite`
        - [ ] `PUT` to `/api/category`
            - [ ] each image can only have one category
            - [ ] needs to be one in the DB
                - [ ] input type of a select dropdown?

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