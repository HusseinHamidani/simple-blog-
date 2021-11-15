import { useEffect, useState } from "react"
import react from "react";
const useFetch = (url)=>{
    const [blog , setBlog ]= useState(null);
    const [loading , setLoading ] = useState(true)
    const [error , setError] = useState(true)
    useEffect(()=>{
        fetch(url)
        .then((res)=>{
            if(!res.ok){
                throw Error()
            }else{
                return res.json()
            }
        })
        .then((data)=>{
            setLoading(false)
            setBlog(data)
        })
        .catch((err)=>{
            setLoading(false)
            setError(err)
        })
    },[url])
    return {blog , loading , error}
}
export default useFetch;