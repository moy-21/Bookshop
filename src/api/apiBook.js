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

export default {
    getBooks
}