"use client"
import React, { useRef } from "react"
import dataset from "./data"
import Card from './movie_card'
import Listcard from "./fmovie_list"

export default function Header(){

    const [filtered_movies,setfiltered_movies]=React.useState([])
    const disp_fmovie=filtered_movies.map(s => <Listcard key={s.id} img={s.img} name={s.name} year={s.year} /> )
    const data=dataset()

    function searching(e)
        {   
            e.preventDefault()
            const searched_movie=e.target.value
            setfiltered_movies(searched_movie? data.filter(s => s.name.includes(searched_movie)): []);
        }

    return(
        <div className="flex gap-2  m-[2px] h-[60px] border-[1px] border-blue-400 justify-between items-center">
          
           <div className="flex justify-center items-center ml-[20px]">
            <img src="./icons8-film-reel-100(2).png" className="h-[38px]" />
            <h3 className="ml-[4px] font-mono text-[34px]">Movie Search</h3>
           </div>

            <form  className=" flex items-center mr-[130] rounded-[10px] bg-gray-900"> 
                <input type="text" onChange={searching} name="movie_name" autoComplete="off" placeholder="   Search here" className="h-[35px] w-[300px] p-[10px] focus:outline-none"/>
            </form>

            {
                disp_fmovie.length?
                <div className="flex-col absolute top-[70px] right-[155px] border-[1px] border-white z-1 ">
                    {disp_fmovie}
                </div>:
                null
            }
        </div>
    );
}


