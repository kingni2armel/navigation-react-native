
import {Base_URL} from "../config";
export const auth = (data)=>{
            return fetch(Base_URL+'/auth/jwt/login',{
                    method:'POST',
                    headers: {
                        'Content-Type':'application/json'
                    },
                    body:data
                })
                .then((response)=>response.json())
            
            }

