import { useEffect, useState } from 'react';
import { Preloader } from '../components/Preloader'
import {  useParams } from 'react-router-dom';
import placeholder from '../No-Image-Placeholder.svg.png'

export function MovieDetails(){
    const {  movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
  

    useEffect(()=>{
        
        fetch("https://api.themoviedb.org/3/movie/"+movieId,{
            headers:{
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGY2NjA2ODBhY2ViZjBhYzBkMWFmZjA4ZDAwYmFmMSIsInN1YiI6IjYzMzcwZWNiMGE1MTdjMDA5Y2Q1MzlkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JkiqIj1EwF_eMNxiyXCSzNrvcC81v9gjqTPqk78XbIQ",
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