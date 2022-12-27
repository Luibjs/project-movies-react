import { Link } from "react-router-dom";
import placeholder from '../No-Image-Placeholder.svg.png'

export function MovieCard({ movie }) {
    const imgUrl = movie.poster_path ? "https://image.tmdb.org/t/p/w300" + movie.poster_path : placeholder;
    return (
        <li className='text-white rounded-3xl bg-blue-800 hover:opacity-60'>
            <Link to={`/movie/${movie.id}`}>
            <img className="w-full h-[400px] rounded-t-2xl" src={imgUrl} alt={movie.title} />
            <div className="my-[10px] text-[20px] rounded-b-2xl text-center">
                <h2>{movie.title}</h2>
            </div>
            </Link>
        </li>
    );
}