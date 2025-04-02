import React from 'react'

function Topcast({ cast }) {
  const BASE_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      <div className='lg:px-12 px-5 py-4 '>
        <p className='text-white text-4xl'>Top Cast</p>
        <div className='flex  overflow-scroll gap-4 hide-scrollbar pt-5 '>
        {cast?.cast?.map((cast) => (
          <div className='h-70 '>
            <div className='lg:h-40 lg:w-40 h-30 w-30 '>
              <div className=' h-full w-full overflow-hidden  border-3 border-[#695222]  rounded-[50%]'>
                <img className='object-cover h-full w-full' src={cast.profile_path ?`${BASE_URL}${cast.profile_path}`:"https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"} alt="" />
              </div>
              <div className='text-center py-2 '>
                <p className='text-white lg:text-xl   '>{cast.original_name}</p>
                <p className='text-gray-500 font-mon'>{cast.known_for_department}</p>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </>
  )
}

export default Topcast