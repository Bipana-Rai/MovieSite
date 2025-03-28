import React from 'react'

const Navbar = () => {
    return (
          <header className=' lg:px-12 px-5 mt-3 '>
            <nav className='bg-gray-700  flex justify-between py-3 px-3 text-white'>
                <div className='text-3xl text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text font-bold'>Movix</div>
                <div className='flex gap-8 lg:text-xl'>
                    <p>Movies</p>
                    <p className='pe-5'>Tvshows</p>
                </div>

            </nav>
          </header>
        
    )
}

export default Navbar