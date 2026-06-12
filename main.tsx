import React from 'react'
import Header from './movie search/header'
import Card from './movie search/movie_card'
import dataset from './movie search/data'

export default function main(){
 const data=dataset()
 const disp_movie =data.map(mov => <Card img={mov.img} name={mov.name} rating={mov.rating} summary={mov.summary}/>)
  return(
    <>
    <Header/>
    <div className="flex gap-3 m-[30px]">{disp_movie}</div>
    </>
  );
}
