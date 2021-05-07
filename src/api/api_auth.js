
import { getAxiosInstanceAuth } from './api'



export const loginApi = (user,callback)=>{
    getAxiosInstanceAuth().post("login",user)
    .then(reponse=>{
        const data = reponse.data
        callback(true,data)
    })
    .catch(error=>{
        console.log(error)
        callback(false,error.response.data.message)
    })
}
export const regiApi = (user,callback)=>{
    getAxiosInstanceAuth().post("regi",user)
    .then(reponse=>{
        const data = reponse.data
        callback(true,data)
    })
    .catch(error=>{
        console.log(error)
        callback(false,error.response.data.message)
    })
}

