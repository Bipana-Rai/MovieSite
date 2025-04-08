import React from 'react'
import Card from "./Cards/Card";

const SearchData = ({data,media}) => {

// console.log(data)
  return (
    <section className="lg:px-12 px-5  ">
    <div className="grid grid-cols-3 lg:grid-cols-5  py-3  whitespace-nowrap gap-4 ">
      {data?.map((item,i) => (
        <Card data={item} fromsearch={true} key={i} media={media}/>
      ))}
    </div>
  </section>
  )
}

export default SearchData