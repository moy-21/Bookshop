import apiClientNoAuth from "./clientNoAuth";


const endpoint = '/book'

const getBooks = async(cancelToken)=>{
    let error;
    let books;
    const response = await apiClientNoAuth(cancelToken).get(endpoint);
    if(response.ok){
        books=response.data.books
    }else{
        error = "An Unexpected Error has Occured. Please Try again Later."
    }
    return {
        error,
        books
    }
}

export default {
    getBooks
}