import {useEffect} from 'react';
import apiUser from '../api/apiUser';
import { CancelToken } from 'apisauce';


export default function useCreateUser(newUser){

    useEffect(
        ()=>{ 
            let response
            const source=CancelToken.source();
            const createUser=async()=>{
                response = await apiUser.post(newUser, source.token)
                if (response){
                    // setAlert({msg:`User: Deleted`,'cat':'success'})
                    console.log("User Created")
                }else{
                    // setAlert({msg:`Please reauthorize you account`,'cat':'warning'})
                    console.log("error")
                }
            }
            return ()=>{source.cancel()}
        },  [newUser]
    )
}