import React from "react"

export default function Header(){

    return(
        <div className="flex gap-2  m-[2px] h-[60px] border-[1px] border-blue-400 justify-start items-center">
            <img src="./icons8-film-reel-100(2).png" className="h-[40px] ml-[20px]" />
            <h3 className="ml-[1px] font-mono text-[30px]">Movie Search</h3>
            <form className=" flex gap-2 ml-[1250px] items-center"> 
                <input type="text" name="movie_name" placeholder="Search here" className="h-[30px] justify-center"/>
                <button><img src="./icons8-search-128.png" className="h-[40px]"/></button>
            </form>
        </div>
    );
}