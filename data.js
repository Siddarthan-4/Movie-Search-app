export function data(){
    return(
        [
            {
                id:1,
                img:"/icons8-search-128.png",
                name:"29",
                genre:"romance,drama",
                year:2026,
                rating:8.9,
                summary:"Sathya, a guy with  "
            },
            {
                
                id:2,
                img:"/icons8-search-128.png",
                name:"Sarvam Maya",
                genre:"drama,feel good",
                year:2026,
                rating:9,
                summary:"nalla padam"
            }
            ,
            {
               id:3,
               img:"/icons8-search-128.png",
               name:"Karuppu",
               genre:"drama,demi god",
               year:2026,
               rating:-9,
               summary:"p***a padam"
            }
            ,
             {
               id:4,
               img:"/icons8-search-128.png",
               name:"Koothi",
               genre:"drama,romance",
               year:2025,
               rating:7.9,
               summary:"OK padam"
            }
        ]
    );
}

const api_key="561316a4"
const base_url="http://www.omdbapi.com/?"


export async function searchmovie(movie){
    const response = await fetch(`${base_url}apikey=${api_key}&s=${movie}`);
    const data = await response.json();
    return data
}
