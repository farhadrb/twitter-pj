import Axios from 'axios'

export const getAxiosInstance = ()=>{

   return Axios.create({
        baseURL:"http://localhost:3000",
        headers:{
            API_KEY:'adfergrthgedthrtgrsytgwrtg'
        }
    })
}
export const getAxiosInstanceAuth = ()=>{

     return Axios.create({
        baseURL:"https://twitterapi.liara.run/api/",
        headers:{
            // API_KEY:'adfergrthgedthrtgrsytgwrtg'
        }
    })
}