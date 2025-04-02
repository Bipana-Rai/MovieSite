import React from 'react'

const Plot = ({data,cast}) => {

  const director=cast?.crew?.filter((c)=>(c. known_for_department==="Directing" ||c. known_for_department==="Sound" )).slice(0,4)
  const writer=cast?.crew?.filter((c)=>(c. known_for_department==="Writing" ||c. known_for_department==="Creator")).slice(0,4)
  const Production=cast?.crew?.filter((c)=>(c. known_for_department==="Production")).slice(0,4)
 
  console.log(cast?.crew)

  return (
    <>
      <div className="pt-7 ">
            <p className=" text-xl text-purple-500 ">Plot</p>
            <p className="lg:pe-40">{data.overview}</p>
          </div>
          <div className="lg:flex border-b-2 py-4  lg:gap-25 gap:10  lg:w-[80%]">
            <p><span className='font-bold'>Status:</span> <span className='text-gray-500'>{data.status}</span> </p>
            <p> <span className='font-bold'>Release date:</span>  <span className='text-gray-500'>{data.release_date || data.first_air_date}</span></p>
          </div>
          <div className=" flex flex-wrap gap-3 border-b-2 py-4  lg:w-[80%]">
          <p className='font-bold'>Director: </p>
            {director?.map((d,i)=>
             <p className='text-gray-500'> {d.name}
             {i < director.length-1 && "," }
             </p>
            )}
           
          </div>
          <div className=" flex flex-wrap gap-3 border-b-2 py-4 lg:w-[80%]">
          <p className='font-bold'>Writer:</p>
            {writer?.map((d,i)=>
             <p className='text-gray-500'> {d.name}
             {i < writer.length-1 && "," }
             </p>
            )}
          </div>
          <div className="flex flex-wrap gap-3 border-b-2 py-4 lg:w-[80%]">
          <p className='font-bold'>Production:</p>
            {Production?.map((d,i)=>
             <p className='text-gray-500'>{d.name}
             {i < Production.length-1 && "," }
             </p>
            )}
          </div>
    </>
  )
}

export default Plot