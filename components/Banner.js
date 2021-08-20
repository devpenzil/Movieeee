import { useEffect, useState } from "react"
import axios from 'axios'
import {apiBaseUrl,API_KEY,imageUrl} from '../Store/apis'
function Banner() {
    const [bannerMovie, setBannerMovie] = useState({})
    const [bgtime, setBgtime] = useState(0)
    const fetchingBannerMovie = () => {
        axios.get(`${apiBaseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>{
            setBannerMovie(Response.data.results[bgtime])
            console.log(bannerMovie)
        }).catch((Error)=>{
            console.log(Error)
        })
    }
    useEffect(() => {
        let times = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
        let randomTime = times[Math.floor(Math.random()*times.length)];
        console.log(bgtime)
        setBgtime(randomTime)
    }, [])
    useEffect(() => {
        fetchingBannerMovie()
    }, [bgtime])
    const styling = {
        backgroundImage: `url('${imageUrl}${bannerMovie ? bannerMovie.backdrop_path : ""}')`,
        width:"100%",
        minHeight:"100vh",
        backgroundSize:'cover',
        backgroundPosition:'center'

    }
    return (
        <div>
            {bannerMovie ?
            
            <div style={styling}>   
                <div className="container h-full justify-center align-end ">
                <div className=" w-full right-0 bottom-0 absolute md:w-1/3 bg-gray-900 p-6 mx-auto text-white rounded-sm shadow-xl opacity-80 ">
                    <div className="text-6xl">
                         {bannerMovie.title}
                    </div>  
                    <div className="text-sm pt-6 text-justify">
                        {bannerMovie.overview}
                    </div>
                    <div className="my-6">
                        <div>User Average Rating <br /></div>
                        <progress className="rounded-full w-full " id="rating" max="10" value={`${bannerMovie.vote_average}`}>
                            {bannerMovie.vote_average}
                        </progress>
                    </div>
                </div>
                </div>
            </div>
        
            : "loading"}
        </div>
    )
}

export default Banner
