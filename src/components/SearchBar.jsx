import React from 'react'
function SearchBar() {
    return (
        <>
            <form action="" >
                <div className='  flex lg:w-[50vw] w-[70vw] h-10'>
                    <input className=' bg-white outline-0 rounded-l-xl text-black w-full ' type="text" />
                    <button className='bg-gray-800 rounded-r-xl px-4'>search</button>
                </div>
            </form>

        </>
    )
}

export default SearchBar