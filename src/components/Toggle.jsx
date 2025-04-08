import React, { useState } from 'react'


function Toggle({ t1, t2, isLeft, setIsLeft,h1,h2}) {
    return (
        <>
            <div className='lg:py-2 pt-1 lg:px-6'>
                <div className='bg-white relative  text-black rounded-3xl  flex cursor-pointer'>
                    <div className='absolute    bg-gradient-to-r from-yellow-500 to-orange-500 h-9 rounded-3xl w-[50%] transition-all duration-400 ' style={{ left: isLeft === t1 ? "0%" : "50%" }}></div>
                    <div className='z-30 flex items-center justify-center h-9 lg:w-22 w-20 text-center px-2 lg-[text-20px] text-[12px] 'style={{color:isLeft === t1 ? "white" : "black" }} onClick={() => setIsLeft(t1)}>{h1}</div>
                    <div className='z-30  flex items-center justify-center h-9  lg:w-22 w-20 text-center px-2 lg-[text-20px] text-[12px]' style={{color:isLeft === t1 ? "black" : "white" }}  onClick={() => setIsLeft(t2)}>{h2}</div>
                </div>

            </div>
        </>
    )
}

export default Toggle