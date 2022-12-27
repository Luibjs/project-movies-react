import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";
import { useLocation } from "react-router-dom";
import { useDebounce } from "../hooks/useDebounce";

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

export function Home() {
    const query = useQuery();
    const search = query.get("search")
    const debouncedSearch = useDebounce(search, 300);

    return (
        <div>
            <Search />
            <MoviesGrid key={debouncedSearch} search={debouncedSearch}/>
        </div>
    );
}