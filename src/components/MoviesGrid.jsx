
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MovieCard } from './MovieCard';
import { Preloader } from './Preloader';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Empty } from './Empty';



export function MoviesGrid({ search }) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const [page,setPage] = useState(1);
    const [hasMore,setHasMore] = useState(true);

    useEffect(() => {
        setLoading(true)
        const searchUrl = search ? "/search/movie?query=" + search + "&page=" + page : "/discover/movie?page=" + page;
        fetch("https://api.themoviedb.org/3" + searchUrl, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGY2NjA2ODBhY2ViZjBhYzBkMWFmZjA4ZDAwYmFmMSIsInN1YiI6IjYzMzcwZWNiMGE1MTdjMDA5Y2Q1MzlkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JkiqIj1EwF_eMNxiyXCSzNrvcC81v9gjqTPqk78XbIQ",
                "Content-Type": "application/json;charset=utf-8",
            },
        }).then((result) => result.json())
            .then((data) => {
                setMovies((prevMovies) => prevMovies.concat(data.results));
                setHasMore(data.page < data.total_pages)
                setLoading(false);
            })
    }, [search, page]);

    if (!loading && movies.length === 0) {
        return <Empty/>
    }

    return (
        <InfiniteScroll dataLength={movies.length} hasMore={hasMore} next={()=> setPage((prevPage)=> prevPage + 1) } loader={<Preloader />}>
            <ul className='grid grid-cols-[repeat(auto-fill,260px)] justify-center gap-[35px] xs:grid-cols-1 xs:px-10'>
                {
                    movies.map(
                        function (movie,index) {
                            return (<MovieCard key={index} movie={movie} />)
                        }
                    )
                }
            </ul>
        </InfiniteScroll>
    );
}