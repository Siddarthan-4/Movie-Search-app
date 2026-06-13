import React from 'react'
import Header from './movie search/header'
import Card from './movie search/movie_card'
import dataset from './movie search/data'

export default function main(){
 const data=dataset()
 const disp_movie =data.map(mov => <Card key={mov.id} img={mov.img} name={mov.name} genre ={mov.genre} rating={mov.rating} summary={mov.summary}/>)

 return(
    <>
    <Header/>
    <div className="flex gap-4 m-[30px]">{disp_movie}</div>
    </>
  );
}
