import apiClientNoAuth from "./clientNoAuth";


const endpoint = '/book'

const getBooks = async(cancelToken)=>{
    let error;
    let bookss;
    const response = await apiClientNoAuth(cancelToken).get(endpoint);
    if(response.ok){
        bookss=response.data.books
    }else{
        error = "An Unexpected Error has Occured. Please Try again Later."
    }
    return {
        error,
        bookss
    }
}
const getBook = async(id, cancelToken) => {
    let error;
    let singleBook;
    const response = await apiClientNoAuth(cancelToken).get(endpoint + '/'+ id);
    if(response.ok){
        singleBook=response.data
    }else{
        error = "An Unexpected Error has Occured. Please Try again Later."
    }
    return {
        error,
        singleBook
    }


}

export default {
    getBooks,
    getBook
}