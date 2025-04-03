import React from 'react'
import Card from './Card'

const SearchData = ({data,media}) => {
  return (
    <section className="lg:px-12 px-5  ">
    <div className="grid grid-cols-3 lg:grid-cols-5  py-3  whitespace-nowrap gap-4 ">
      {data?.map((item,i) => (
        <Card data={item} fromsearch={true} media={media} key={i}/>
      ))}
    </div>
  </section>
  )
}

export default SearchData