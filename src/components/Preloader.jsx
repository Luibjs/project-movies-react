import {RiLoader3Fill} from 'react-icons/ri'

export function Preloader(){
    return(
        <div className='flex justify-center items-center h-[60vh]'>
            <RiLoader3Fill className='text-white animate-spin' size={60}/>
        </div>
    );
}