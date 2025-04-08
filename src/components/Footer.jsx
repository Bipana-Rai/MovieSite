import React from 'react'
function Footer() {
    return (
        <footer className='bg-[#030814]  lg:px-5 mb-0 bottom-0 ' >
            <div className='flex items-center justify-center flex-col    text-white  p-10'>
                <div className='flex justify-center  lg:gap-4 gap-3 lg:w-[40%] w-[100wv text-[13px]   '>
                    <a href='#'>Terms Of Use</a>
                    <a href='#'>Privacy-Policy</a>
                    <a href='#'>About</a>
                    <a href='#'>Blog</a>
                    <a href='#'>FAQ</a>
                </div>
                <div className='w-[100%] lg:w-[50%] text-[14px] py-4  text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quibusdam amet voluptatem voluptates? Fugiat expedita repellendus vitae dolores a, facilis quis. Voluptas sapiente aliquid vel in sed necessitatibus possimus consequatur.</div>
                <div className='flex items-center justify-center gap-6'>
                    <i className="fa-brands fa-facebook cursor-pointer" aria-hidden="true"></i>
                    <i className="fa-brands fa-instagram cursor-pointer" aria-hidden="true"></i>
                    <i className="fa-brands fa-twitter cursor-pointer" aria-hidden="true"></i>
                    <i className="fa-brands fa-linkedin cursor-pointer" aria-hidden="true"></i>
                </div>
            </div>
        </footer>
    )
}

export default Footer