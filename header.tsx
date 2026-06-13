"use client"
import React from "react"
import dataset from "./data"
import Card from './movie_card'

export default function Header(){

const [filtered_movies,setfiltered_movies]=React.useState([])

const disp_fmovie=filtered_movies.map(s =><option children={s.name} />)

function searching(e)
    {   
        const data=dataset()
        const searched_movie=e.target.value
        setfiltered_movies(data.filter(s => s.name.includes(searched_movie))) 
    }

    return(
        <div className="flex gap-2  m-[2px] h-[60px] border-[1px] border-blue-400 justify-start items-center">
            <img src="./icons8-film-reel-100(2).png" className="h-[40px] ml-[20px]" />
            <h3 className="ml-[1px] font-mono text-[30px]">Movie Search</h3>
           
            <form  className=" flex gap-2 ml-[1200px] items-center"> 
                <input type="text" onChange={searching} name="movie_name" placeholder="Search here" className="h-[30px] justify-center"/>
                
            </form>
            <select>
                {disp_fmovie}
                </select>
        </div>
    );
}


