import axios from 'axios'
import { getAxiosInstance } from './api'



export const getAllTweet = (callback)=>{
    getAxiosInstance().get("/tweet")
    .then(reponse=>{
        const data = reponse.data
        callback(true,data)
    })
    .catch(error=>{
        console.log(error)
        callback(false,error)
    })
}

export const getHashtags = (callback)=>{
    getAxiosInstance().get("/hashtags")
    .then(reponse=>{
        const data = reponse.data
        callback(true,data)
    })
    .catch(error=>{
        console.log(error)
        callback(false,error)
    })
}



export const newTweetRec = (data,callback)=>{
    getAxiosInstance().post("/tweets",data)
    .then(reponse=>{
        callback(true)
    })
    .catch(error=>{
        console.log(error)
        callback(false)
    })
}
export const getUsers = (data,callback)=>{
    getAxiosInstance().get("/tweets")
    .then(reponse=>{
        callback(true)
    })
    .catch(error=>{
        console.log(error)
        callback(false)
    })
}