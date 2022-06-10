import {createContext, useState, useEffect, useReducer} from "react";
import { bookReducer, readingListActions } from "../reducers/bookReducer"

export const AppContext = createContext();

const AppContextProvider=({children})=> {

    const getUserFromLS = ()=> {
        let user = localStorage.getItem('user')
        if (user) {
            return JSON.parse(user)
        }
    }

    const getReadingListFromLS = ()=> {
        let readingList = localStorage.getItem('readingList')
        if (readingList) {
            return JSON.parse(readingList)
        }
    }

    const [user, _setUser] = useState(getUserFromLS())
    const [alert,setAlert] =useState({})
    const [readingList, dispatch] = useReducer(bookReducer, getReadingListFromLS()??[])

    useEffect(
        ()=>{
          
                localStorage.setItem('readingList', JSON.stringify(readingList))
            

        },[readingList]
    )


    const setUser = (user)=> {
        localStorage.setItem('user', JSON.stringify(user))
        _setUser(user)
    }

    const values = {
        alert,
        setAlert,
        user,
        setUser,
        readingList,
        addFavorite:(book)=>{
            dispatch({type: readingListActions.addFavorite, book})
        },
        addBulkToFavorite:(book)=>{
            dispatch({type: readingListActions.addBulkToFavorite, book})
        },
        removeFavorite:(book)=>{
            dispatch({type: readingListActions.removeFavorite, book})
        },
        removeAllFavorite:(book)=>{
            dispatch({type:readingListActions.removeAllFavorite, book})
        },
        emptyFavorite:()=>{dispatch({type:readingListActions.emptyFavorite})}

    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider