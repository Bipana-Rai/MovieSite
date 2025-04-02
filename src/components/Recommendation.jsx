import React from 'react'
import Grid from './Grid'

const Recommendation = ({recommend,media}) => {
  return (
    <>
    <Grid data={recommend} title={"Recommendations"} fromSimilar={true} media={media}/>
    </>
  )
}

export default Recommendation