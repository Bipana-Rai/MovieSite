import React from 'react'
function Footer() {
    return (
        <footer className='bg-[#030814]  px-5 mt-5'>
            <div className='  flex flex-col items-center text-white p-10'>
                <div className='flex justify-center  gap-4 lg:w-[40%]  b text-[13px]   '>
                    <a href='#'>Terms Of Use</a>
                    <a href='#'>Privacy-Policy</a>
                    <a href='#'>About</a>
                    <a href='#'>Blog</a>
                    <a href='#'>FAQ</a>
                </div>
                <div className='w-[70%] lg:w-[50%] text-[14px] py-4  text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quibusdam amet voluptatem voluptates? Fugiat expedita repellendus vitae dolores a, facilis quis. Voluptas sapiente aliquid vel in sed necessitatibus possimus consequatur.</div>
                <div className='flex  gap-6'>
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