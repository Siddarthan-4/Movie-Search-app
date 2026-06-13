import React from 'react'


export default function Movie_card({key,img,name,genre,rating,summary}){
    return(
        <div id="card" className="grid gap-2 h-[300px] grid-cols-3 w-[220px] p-[10px] border-[1px] border-yellow-200 rounded-[10px] hover:scale-[1.06]">
            <img src={img} className="h-[200px] col-span-3"/>
            <h3 className="col-span-2 ">{genre}</h3>
            <h2 className="col-span-1 ml-[40px]">{rating} </h2>
            <p className="col-span-3 "> {summary}</p>
        </div>
    );
}