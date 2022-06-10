const readingListActions = {
    addFavorite: "addFavorite",
    removeFavorite: "removeFavorite",
    emptyFavorite: "emptyFavorite",
    removeAllFavorite: "removeAllFavorite",
    addBulkToFavorite: "addBulkToFavorite",
}

function bookReducer (readingList=[], {type, book}) {
    switch(type){
        case readingListActions.addFavorite:
            return [...readingList, book];
        case readingListActions.addBulkToFavorite:
            console.log(book)
            return [...readingList, ...book];
        case readingListActions.removeFavorite:
            let newList= readingList.slice()
            for (let favorite of newList){
                if(favorite.id === book.id){
                    newList.splice(newList.indexOf(favorite),1)
                    return newList
                }
            }
            return newList
        case readingListActions.removeAllFavorite:
            return readingList.filter((favorite)=>book.id!== favorite.id)

        case readingListActions.emptyFavorite:
            return []
        default:
            throw new Error('I am not a teapot!')
    }
}

export{
    bookReducer,
    readingListActions
}