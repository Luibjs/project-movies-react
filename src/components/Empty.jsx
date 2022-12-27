import { MdCancel } from 'react-icons/md'

export function Empty(){
    return(
        <div className="w-[80%] h-[30vh] mx-auto flex flex-col items-center justify-center">
            <p className='text-blue-800'><MdCancel size={80}/></p>
            <p className="text-white text-center text-[18px] font-medium">Not Resources</p>
        </div>
    )
}