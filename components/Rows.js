import axios from 'axios'
import { useEffect, useState } from 'react'
import {action,apiBaseUrl, imageUrl} from '../Store/apis'
import Image from 'next/image'
function Rows(props) {
    const [movieData, setMovieData] = useState([])
    const fetchingMvies = () => {
        axios.get(`${apiBaseUrl}${action}${props.id}`).then((Response)=>{
            setMovieData(Response.data.results)
            console.log(movieData)
        }).catch((Error)=>{
            console.log(Error)
        })
    }
    useEffect(() => {
        fetchingMvies() 
    }, [])
    return (
        <div className="p-10 text-white">
            <div className="text-4xl">{props.name}</div>
            <div className=" w-full flex flex-row overflow-x-auto">
                
                {movieData ?
                    movieData.map((obj)=>{
                        return(
                            <div className="m-4  border-2 border-white max-w-4xl">
                                <div style={{backgroundImage:`url(${imageUrl}${obj.backdrop_path})`, backgroundColor:"black", backgroundSize:"cover",backgroundPosition:"center"}} className="w-52 h-52">
                                   
                                </div>
                                <div className="text-2xl mx-4 my-4">{obj.original_title}</div>
                            </div>
                        )
                    })
                : ""}
            </div>
        </div>
    )
}

export default Rows
