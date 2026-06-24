import React from "react"

export default function Listcard({img,name,year})
{
    return(
        <div className="flex gap-3 justify-between p-[5px] items-center h-[100px] w-[300px] hover:bg-gray-800 " >
            <img src={img} className="h-[90px] rounded-[10px] " />
            <h3 className="font-mono text-[18px] font-light ">{name}</h3>
            
            <h4 className="font-mono h-[30px] ">{year}</h4>
        </div>
    );
}