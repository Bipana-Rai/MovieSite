import React from 'react'
import Card from './Card'
import Toggle from './Toggle'

function Grid({ data, error, loading, title,t1,t2 ,isLeft, setIsLeft,h1,h2 }) {
    return (
        <>
            <section className='lg:px-12 px-5'>
                <div className='flex justify-between'>
                <p className='lg:text-4xl text-2xl'>{title}</p>
                <Toggle t1={t1} t2={t2} isLeft={isLeft} setIsLeft={setIsLeft} h1={h1} h2={h2}/>
                </div>
                <div className='hide-scrollbar flex gap-3 py-3 overflow-x-auto whitespace-nowrap'>
                    {data?.results?.map((item) =>
                        <Card data={item} />
                    )}
                </div>
            </section>
        </>
    )
}

export default Grid