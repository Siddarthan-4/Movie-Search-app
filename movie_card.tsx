import React from 'react'


export default function Movie_card({key,img,name,genre,rating,summary}){
    return(
        <div id="card" className="grid gap- h-[300px] grid-cols-3 w-[220px] p-[10px] border-[1px] border-yellow-200 rounded-[15px] hover:scale-[1.06]">
            
           <div className="flex h-[150px] col-span-3 justify-around"> <img src={img} /></div>
            
            <div className="flex font-mono col-span-3 justify-between">
              <h3 className="font-medium">{genre}</h3>
              <h2 className="font-medium">{rating} </h2>
            </div>
           
            <div className="font-mono font-light col-span-3 text-[15px]">
                <p> {summary}</p>
            </div>
        </div>
    );
}