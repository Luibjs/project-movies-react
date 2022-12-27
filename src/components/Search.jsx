import { MdOutlineScreenSearchDesktop } from 'react-icons/md'
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

export function Search() {

    
    const history = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const query = useQuery();
    const search = query.get("search");
    


    return (
        <form onSubmit={handleSubmit}>
            <div className='flex justify-center mb-[50px] mt-[90px]'>
                <div className='flex'>
                    <input type="text"  placeholder='Movie' aria-label='Search Movies'
                        className='rounded-l-2xl p-2 pl-[18px] focus:outline-none' value={search || ""}
                        onChange={(e) => {
                            const value = e.target.value;
                            history(("/?search=" + value))
                        }}
                    />
                    <button type="submit" className="bg-white text-blue-800 rounded-r-2xl pr-[10px] pointer-events-none" ><MdOutlineScreenSearchDesktop size={25} /></button>
                </div>
            </div>
        </form>
    );
}