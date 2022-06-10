import React, {useEffect, useContext} from 'react'
import {getUser} from '../api/apiBasicAuth';
import { CancelToken } from 'apisauce';
import { AppContext } from '../context/AppContext'


export default function useLogin(loginCreds, setLoginCreds, setError, setUser) {
    //get navigate
        const {setAlert} = useContext(AppContext)
        const login = async (cancelToken)=>{
            const response = await getUser(loginCreds.email, loginCreds.password,cancelToken)
            console.log(response)
            if(response.user?.token){
                console.log('logged in');
                setAlert({msg:`Successfully Logged In`,'cat':'success'})

                setUser(response.user);
                setLoginCreds({})
                // navigate to the home page
            }
            setError(response.error);
        }
        
        
        useEffect(
            ()=>{
                const source = CancelToken.source()
                if (loginCreds.email && loginCreds.password)
                login(source.token)
                return ()=>{source.cancel()}
            },
            [loginCreds,  setLoginCreds, setError, setUser]
        )
        
    }