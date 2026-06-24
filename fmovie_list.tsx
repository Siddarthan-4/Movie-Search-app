import React from "react"

export default function Listcard({img,name,year})
{
    return(
        <div className="flex gap-2 justify-around items-center h-[50px] w-[240px] hover:bg-gray-800 " >
            <img src={img} className="h-[30px] rounded-[10px] " />
            <h3 className="font-mono h-[30px] ">{name}</h3>
            <h4 className="font-mono h-[30px] ">{year}</h4>
        </div>
    );
}