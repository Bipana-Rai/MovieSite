import React from 'react'
import { useNavigate } from 'react-router-dom';
const BASE_URL = "https://image.tmdb.org/t/p/w500";

function Card({ data }) {
    const navigate=useNavigate()
    return (
        < >
            <div className='' key={data.id} onClick={()=>navigate(`movie/${data?.id}`)}>
                <div className=' overflow-hidden w-40 sm:w-55 bg-gray-700 p-1  ' >
                    <img className=' object-cover rounded-2xl' src={`${BASE_URL}${data.poster_path}`} alt="" />
                </div>
                <div className='bg-gray-700  text-center  text-white w-40 sm:w-55'>
                    <p >{data.name || data.title}</p>
                    <p>{data.first_air_date || data.release_date}</p>
                </div>
            </div>
        </>
    )
}

export default Card