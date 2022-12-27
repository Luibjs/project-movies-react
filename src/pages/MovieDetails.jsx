import { useEffect, useState } from 'react';
import { Preloader } from '../components/Preloader'
import {  useParams } from 'react-router-dom';
import placeholder from '../No-Image-Placeholder.svg.png'

export function MovieDetails(){
    const {  movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
  

    useEffect(()=>{
        
        fetch(process.env.REACT_APP_API_DETAILS+movieId,{
            headers:{
                Authorization: "Bearer "+ process.env.REACT_APP_API_TOKEN,
                "Content-Type": "application/json;charset=utf-8",
            },
        })
        .then((result) => result.json())
        .then((data)=>{
            setMovie(data);
            setIsLoading(false);
        })
    },[movieId])

    if (isLoading === true) {
        return <Preloader/> 
     }

    if (movie === null){
        return null;
    }
    const url = movie.poster_path ? "https://image.tmdb.org/t/p/w500" + movie.poster_path : placeholder;

    return(
        <div className="flex flex-col items-center text-white h-[60vh] w-[80%] mx-auto md:flex-row md:items-center md:gap-10 lg:flex-row lg:justify-center lg:items-center lg:gap-10">
            <div>
                <img className='rounded-2xl w-[350px]' src={url} alt={movie.title} />
            </div>
            <div className='w-[95%] mt-10 text-[18px]'>
                <p className='pb-[8px]'><strong>Title: </strong> {movie.title}</p>
                <p className='pb-[8px]'><strong>Genre: </strong></p>
                <p className='pb-[8px]'><strong>Description: </strong>{movie.overview}</p>
            </div>
        </div>
    );
}