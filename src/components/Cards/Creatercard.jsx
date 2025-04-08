import React from 'react'

const Creatercard = ({title,data}) => {
  return (
    <>
     <div className=" flex flex-wrap gap-3 border-b-2 py-4 lg:w-[90%]">
        <p className="font-bold">{title}:</p>
        {data?.length > 0 ? (
          data.map((d, i) => (
            <p key={i} className="text-gray-500">
              {d.name}
              {i < data.length - 1 && ","}
            </p>
          ))
        ) : (
          <p className="text-gray-500">Null</p>
        )}
      </div>
        </>
  )
}

export default Creatercard