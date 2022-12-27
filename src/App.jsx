import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { MovieDetails } from "./pages/MovieDetails";

function App() {
    return (
        <BrowserRouter>
            <div>
                <header>
                    <div className="w-fit mx-auto px-4 rounded-3xl outline-dotted outline-blue-800 mt-[45px] mb-[50px]">
                        <Link to="/"><h1 className="text-blue-800 text-[35px] font-bold text-center">movies</h1></Link>
                    </div>
                </header>
                <main>

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/movie/:movieId" element={<MovieDetails />} />
                    </Routes>

                </main>
            </div >
        </BrowserRouter>

    );
}

export default App;