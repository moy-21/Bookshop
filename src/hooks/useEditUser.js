import {useEffect, useContext} from 'react';
import apiUser from '../api/apiUser';
import { CancelToken } from 'apisauce';
import { AppContext } from '../context/AppContext'

let token1= "4Y2diavOCI3CCX9fU48Rs16qEbiV_GujIpKTj59Wa6A"
export default function useEditUser(userInfo){
    const user = useContext(AppContext)

    useEffect(
        ()=>{ 
            let response
            const source=CancelToken.source();
            const editUser=async()=>{
                response = await apiUser.put(token1, userInfo, source.token)
                if (response){
                    // setAlert({msg:`User: ${user.name} Editted`,'cat':'success'})
                    console.log("edited")
                }else{
                    // setAlert({msg:`Please reauthorize you account`,'cat':'warning'})
                    console.log("error")
                }
            }
            return ()=>{source.cancel()}
        },  [userInfo]
    )
}