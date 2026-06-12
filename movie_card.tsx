import React from 'react'


export default function Movie_card({img,name,rating,summary}){
    return(
        <div className="grid gap-1 grid-cols-3 border-[1px] border-yellow-200 rounded-[10px]">
            <img src={img} className="col-span-3"/>
            <h3 className="col-span-2 ml-[10px]">{name}</h3>
            <h2 className="col-span-1 mr-[10px]">{rating} </h2>
            <p className="col-span-3 "> {summary}</p>
        </div>
    );
}